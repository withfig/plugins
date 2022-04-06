zsh-completion-generator
========================

Plugin that generates completion functions automatically from getopt-style help texts.


Motivation
----------
Writing completion functions is boring, plus they can break when
the software updates the CLI. This plugin tries to parse the help text
of the given commands and generate a completion function automatically.

It's a best-effort service, not guaranteed to work in all cases.
Completion functions which are already present (and most likely better)
are not overridden by this plugin.

How to use
----------
Provide default program list.

The plugin will create completions for those programs at load time, once.
You can also generate completions from the shell, by using provided `gencomp`
function:

    $ gencomp ggrep
    $ source ~/.zshrc # or run `compinit'
    $ ggrep -*[TAB]* -> magic

Licence
-------

GNU GPLv2

