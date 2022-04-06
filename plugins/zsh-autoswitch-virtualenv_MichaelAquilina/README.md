*zsh-autoswitch-virtualenv* is a simple and quick ZSH plugin that switches python
virtualenvs automatically as you move between directories.

*zsh-autoswitch-virtualenv* also automatically detects and activates your **Pipenv** and **Poetry** projects without any setup necessary.

``autoswitch-virtualenv`` requires `virtualenv <https://pypi.org/project/virtualenv/>`__ to be installed.
You will also need to make sure that ``python`` (without a suffix; both Python 2 and 3 are supported) is available in your ``$PATH``.

## How it Works

Simply call the ``mkvenv`` command in the directory you wish to setup a
virtual environment. A virtual environment specific to that folder will
now activate every time you enter it.

``zsh-autoswitch-virtualenv`` will detect python projects and remind
you to create a virtual environment. This mainly occurs if one of the following
is found in current the directory:

* setup.py
* requirements.txt
* Pipfile
* poetry.lock

To create a virtual environment for that project, simply run ``mkvenv``.
This command works as expected for all popular python project types
(virtualenvs, pipenv and poetry).

## More Details

Moving out of the directory will automatically deactivate the virtual
environment. However you can also switch to a default python virtual
environment instead by setting the ``AUTOSWITCH_DEFAULTENV`` environment
variable.

Internally this plugin simply works by creating a file named ``.venv``
which contains the name of the virtual environment created (which is the
same name as the current directory but can be edited if needed). There
is then a precommand hook that looks for a ``.venv`` file and switches
to the name specified if one is found.

Autoswitch virtualenv also works automatically with projects which contains
a ``.venv`` virtualenv directly created by the ``python -m venv`` command.

For the case of pipenv projects, the plugin will look for a ``Pipfile``
and activates pipenv if it detects an existing virtual environment for it.

For the case of poetry projects, the plugin will look for a ``pyproject.toml``
and activates poetry if it detects an existing virtual environment for it.

**NOTE**: you may want to add ``.venv`` to your ``.gitignore`` in git
projects (or equivalent file for the Version Control you are using).

## Pipenv and Poetry Integration

This plugin will also detect and auto activate virtualenvs made with ``pipenv`` or ``poetry``.
No action needs to be performed in projects where a poetry/pipenv project has already been setup.

## Commands

### mkvenv

Setup a new python project with autoswitching using the `mkvenv` helper command.

```
$ cd my-python-project
$ mkvenv
Creating my-python-project virtualenv
Found a requirements.txt. Install? [y/N]:
Collecting requests (from -r requirements.txt (line 1))
    Using cached requests-2.11.1-py2.py3-none-any.whl
Installing collected packages: requests
Successfully installed requests-2.11.1
```

This command also works as expected with both ``poetry`` and ``pipenv``.

Optionally, you can specify the python binary to use for this virtual environment

```
$ mkvenv --python=/usr/bin/python3
```

In fact any parameters passed to mkvenv will be passed to the relevant setup command.
The same applies to passing additional parameters to ``pipenv install`` and ``poetry install``.

Autoswitching is smart enough to detect that you have traversed to a
project subdirectory. So your virtualenv will not be deactivated if you
enter a subdirectory.

```
$ cd my-python-project
Switching virtualenv: my-python-project  [Python 3.4.3+]
$ cd src
$ # Notice how this has not deactivated the project virtualenv
$ cd ../..
Switching virtualenv: mydefaultenv  [Python 3.4.3+]
$ # exited the project parent folder, so the virtualenv is now deactivated
```

### rmvenv

You can remove the virtual environment for a directory you are currently
in using the ``rmvenv`` helper function:

```
$ cd my-python-project
$ rmvenv
Switching virtualenv: mydefaultenv  [Python 2.7.12]
Removing myproject...
```

This will delete the virtual environment in ``.venv`` and remove the
``.venv`` file itself. The ``rmvenv`` command will fail if there is no
``.venv`` file in the current directory:

```
$ cd my-non-python-project
$ rmvenv
No .venv file in the current directory!
```

Similar to ``mkvenv``, the ``rmvenv`` command also works as you would
expect with removing ``poetry`` and ``pipenv`` projects.

### disable_autoswitch_virtualenv

Temporarily disables autoswitching of virtualenvs when moving between
directories.

### enable_autoswitch_virtualenv

Re-enable autoswitching of virtualenvs (if it was previously disabled).

## Security Warnings

zsh-autoswitch-virtualenv will warn you and refuse to activate a virtual
environment automatically in the following situations:

-  You are not the owner of the ``.venv`` file found in a directory.
-  The ``.venv`` file has weak permissions. I.e. it is writable by other users on the system.

In both cases, the warnings should explain how to fix the problem.

These are security measures that prevents other, potentially malicious
users, from switching you to a virtual environment you did not want to
switch to.
