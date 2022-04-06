With `zsh-async` you can run multiple asynchronous jobs, enforce unique jobs (multiple instances of the same job will not run), flush all currently running jobs and create multiple workers (each with their own jobs). For each worker you can register a callback-function through which you will be notified about the job results (job name, return code, output and execution time).

## Overview

`zsh-async` is a small library for running asynchronous tasks in zsh without requiring any external tools. It utilizes `zsh/zpty` to launch a pseudo-terminal in which all commands get executed without blocking any other processes. Checking for completed tasks can be done manually, by polling, or better yet, automatically whenever a process has finished executing by notifying through a `SIGWINCH` kill-signal.

This library bridges the gap between spawning child processes and disowning them. Child processes launched by normal means clutter the terminal with output about their state, and disowned processes become separate entities, no longer under control of the parent. Now you can have both!

## Usage

The async worker is a separate environment (think web worker). You send it a job (command + parameters) to execute and it returns the result of that execution through a callback function. If you find that you need to stop/start a worker to update global state (variables) you should consider refactoring so that state is passed during the `async_job` call (e.g. `async_job my_worker my_function $state1 $state2`).

Note that because the worker is a separate forked environment, any functions you want to use as jobs in the worker need to be defined before the worker is started, otherwise you will get a `command not found` error when you try to launch the job.

### Functions

The `zsh-async` library has a bunch of functions that need to be used to perform async actions:

#### `async_init`

Initializes the async library (not required if using async from `$fpath` with autoload.)

#### `async_start_worker <worker_name> [-u] [-n] [-p <pid>]`

Start a new async worker with optional parameters, a worker can be told to only run unique tasks and to notify a process when tasks are complete.

* `-u` unique. Only unique job names can run, e.g. the command `git status` will have `git` as the unique job name identifier

* `-n` notify through `SIGWINCH` signal. Needs to be caught with a `trap '' WINCH` in the process defined by `-p`

  **NOTE:** When `zsh-async` is used in an interactive shell with ZLE enabled this option is not needed. Signaling through `SIGWINCH` has been replaced by a ZLE watcher that is triggered on output from the `zpty` instance (still requires a callback function through `async_register_callback` though). Technically zsh versions prior to `5.2` do not return the file descriptor for zpty instances, however, `zsh-async` attempts to deduce it anyway.

* `-p` pid to notify (defaults to current pid)

#### `async_stop_worker <worker_name_1> [<worker_name_2>]`

Simply stops a worker and all active jobs will be terminated immediately.

#### `async_job <worker_name> <my_function> [<function_params>]`

Start a new asynchronous job on specified worker, assumes the worker is running. Note if you are using a function for the job, it must have been defined before the worker was started or you will get a `command not found` error.

#### `async_worker_eval <worker_name> <my_function> [<function_params>]`

Evaluate a command (like async_job) inside the async worker, then worker environment can be manipulated. For example, issuing a cd command will change the PWD of the worker which will then be inherited by all future async jobs.

Output will be returned via callback, job name will be [async/eval].

#### `async_process_results <worker_name> <callback_function>`

Get results from finished jobs and pass it to the to callback function. This is the only way to reliably return the job name, return code, output and execution time and with minimal effort.

If the async process buffer becomes corrupt, the callback will be invoked with the first argument being `[async]` (job name), non-zero return code and fifth argument describing the error (stderr).

The `callback_function` is called with the following parameters:

* `$1` job name, e.g. the function passed to async_job
* `$2` return code
  * Returns `-1` if return code is missing, this should never happen, if it does, you have likely run into a bug. Please open a new [issue](https://github.com/mafredri/zsh-async/issues/new) with a detailed description of what you were doing.
* `$3` resulting (stdout) output from job execution
* `$4` execution time, floating point e.g. 0.0076138973 seconds
* `$5` resulting (stderr) error output from job execution
* `$6` has next result in buffer (0 = buffer empty, 1 = yes)
  * This means another async job has completed and is pending in the buffer, it's very likely that your callback function will be called a second time (or more) in this execution. It's generally a good idea to e.g. delay prompt updates (`zle reset-prompt`) until the buffer is empty to prevent strange states in ZLE.

Possible error return codes for the job name `[async]`:

* `1` Corrupt worker output.
* `2` ZLE watcher detected an error on the worker fd.
* `3` Response from async_job when worker is missing.
* `130` Async worker crashed, this should not happen but it can mean the file descriptor has become corrupt. This must be followed by a `async_stop_worker [name]` and then the worker and tasks should be restarted. It is unknown why this happens.

#### `async_register_callback <worker_name> <callback_function>`

Register a callback for completed jobs. As soon as a job is finished, `async_process_results` will be called with the specified callback function. This requires that a worker is initialized with the -n (notify) option.

#### `async_unregister_callback <worker_name>`

Unregister the callback for a specific worker.

#### `async_flush_jobs <worker_name>`

Flush all current jobs running on a worker. This will terminate any and all running processes under the worker by sending a `SIGTERM` to the entire process group, use with caution.
