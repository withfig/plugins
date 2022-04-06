### mfunc
#### a function wrapper plugin for ZSH

Allows you to define persistent functions on-the-fly, without the need to add
them to your config files. Your functions are permanently available until you
delete them.

The plugin defines 3 functions:

| `Command`               | Action
|-------------------------|----------------------------------------
| `mfunc name [name] ...` | create new function(s) interactively
| `rfunc name [name] ...` | delete existing user-defined function(s)
| `lfunc`                 | list all user-defined functions

functions are stored as plain text in $ZSH/functions/ and made available via
the autoload builtin (i.e. they are only loaded into memory when called for the
first time).

#### Installation

######a) As an oh-my-zsh plugin
1. Run:
`cd $ZSH/custom && git clone https://github.com/hlohm/mfunc.git plugins/mfunc`

2. Add `mfunc` to your plugins in your `.zshrc`. The relevant line should
look something like this:
`plugins=(git mfunc)`

######b) using antigen
1. Add this line where you load your antigen bundles in your `.zshrc`:

`antigen bundle hlohm/mfunc`
######c) with vanilla ZSH
1. `git clone` this repo to a location of your choice

2. add a line `source /location/of/your/choice/mfunc.plugin.zsh` to your .zshrc

Upon its first run the plugin will notify you that it created the directory in
which it stores your functions.

#### Disclaimer

This is an early version covering only the most basic functionality. There are
no safeguards whatsover, so use at you own risk. Things like tab completion, 
input sanitization and the like are on the TODO list.

