zsh-reentry-hook
================

Plugin that re-enters working directory if it has been removed and re-created.

Motivation
----------

You probably experienced it before: you're deep in a folder structure, that is being
removed and generated again by some other program.

If that happens, you're still in the folder, but you can no longer list files, go to parent directory, etc.

As a work-around, you have to change to some non-deleted folder and then change back (or `cd .`).

This plugin does that for you automatically!

How to install
--------------
### Using antigen/zgen

After installing antigen put `antigen bundle RobSis/zsh-reentry-hook`
into your `.zshrc`.

### Manually
* Download the script or clone this repository:

    `$ cd ~/.zsh/`
    
    `$ git clone git://github.com/RobSis/zsh-reentry-hook.git`

* Source the script in your `~/.zshrc`:

    `source $HOME/.zsh/zsh-reentry-hook/zsh-reentry-hook.plugin.zsh`


Licence
-------

GNU GPLv2

