# Autoenv for Zsh

zsh-autoenv automatically sources (known/whitelisted) `.autoenv.zsh` files,
typically used in project root directories.

It handles "enter" and leave" events, nesting, and stashing of
variables (overwriting and restoring).

## Requirements

- Zsh version 4.3.10 or later.

## Features

- Support for enter and leave events, which can use the same file.
  By default it uses `.autoenv.zsh` for entering, and `.autoenv_leave.zsh`
  for leaving.
- Interactively asks for confirmation / authentication before sourcing an
  unknown `.autoenv.zsh` file, and remembers whitelisted files by their
  hashed content.
- Test suite.
- Written in/for Zsh.

### Variable stashing

You can use `autostash` in your `.autoenv.zsh` files to overwrite some
variable, e.g.  `$PATH`.  When leaving the directory, it will be automatically
restored.

```console
    % echo 'echo ENTERED; autostash FOO=changed' > project/.autoenv.zsh
    % FOO=orig
    % cd project
    Attempting to load unauthorized env file!
    -rw-rw-r-- 1 user user 36 Mai  6 20:38 /tmp/project/.autoenv.zsh

    **********************************************

    echo ENTERED; autostash FOO=changed

    **********************************************

    Would you like to authorize it? (type 'yes') yes
    ENTERED
    project % echo $FOO
    changed
    % cd ..
    % echo $FOO
    orig
```
There is also `stash`, `unstash` and `autounstash`, in case you want to
have more control.

The varstash library has been taken from smartcd, and was optimized for Zsh.

## Writing your .autoenv.zsh file

### `autoenv_source_parent()`

zsh-autoenv will stop looking for `.autoenv.zsh` files upwards after the first
one has been found, but you can use the function `autoenv_source_parent` to
source the next `.autoenv.zsh` file upwards the directory tree from there.

The function accepts an optional argument, which allows to stop looking before
the file system root is reached:

```zsh
autoenv_source_parent ../..
```

## Usage

zsh-autoenv works automatically once installed.

You can use ``autoenv-edit`` to edit the nearest/current autoenv files.
It will use ``$AUTOENV_EDITOR``, ``$EDITOR``, or ``vim`` for editing.
