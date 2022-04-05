# zsh-expand
This plugin expands regular aliases, global aliases and incorrect spellings and phrases with the spacebar key.  Native expansions such as globs, command/process substitution, =command expansion, history expansion and $parameters are also expanded by default but can be turned off.  The plugin uses only zsh with no pipes nor external commands for maximum speed.

Expansion of regular aliases is done in the command/first position of a statement and after certain commands (sudo, env, zpwr) when in other positions in a statement 

Expansion of global aliases, incorrect spellings and phrases, globs, history expansion and $parameters is global to command line.  Exception to this is when in command position and word in command position is a command, function etc., then no expansion will be performed.

Expansion on aliases and global aliases occurs when cursor is on position right of expansion candidate or there is one space between cursor and expansion candidate (for expansion from menuselect).  Two spaces after expansion candidate will prevent expansion on spacebar.

Expansion on history, globs, parameters and mispellings occurs when cursor is on position right of expansion candidate.  A space after expansion candidate will prevent expansion on spacebar.

There is optional expansion of unexpanded line into history on accepting current line with enter key.  Expansion occurs for aliases not spelling correction.  Globs and other expansions can be optionally enabled on accepting line. See [below](#optional-expansion-of-unexpanded-line-into-history-on-enter).

## Demo
[![asciicast](https://asciinema.org/a/FbFsuMCSLtooqkB5ZZbBZeiEg.svg)](https://asciinema.org/a/FbFsuMCSLtooqkB5ZZbBZeiEg)

## Comparison to other expanding abbrevation libraries 
### [zsh-abbr](https://github.com/olets/zsh-abbr)
#### Features that zsh-abbr has but zsh-expand does not
- separate abbr command
#### Features that zsh-expand has but zsh-abbr does not
- zsh-expand uses aliases with no need of separate abbr command
- zsh-expand expands global aliases
- zsh-expand expands aliases after builtin/command/sudo/env and linear combinations of these with and without options
    - `sudo gco<space> => sudo git checkout`
    - `\builtin \command \sudo -u root -E \env gco<space> => \builtin \command \sudo -u root -E \env git checkout`
- zsh-expand expands incorrect spellings and phrases, globs, command/process substitution, =command expansion, history expansion and $parameters

### [zsh-abbrev-alias](https://github.com/momo-lab/zsh-abbrev-alias)
#### Features that zsh-abbrev-alias has but zsh-expand does not
- separate abbrev-alias command
#### Features that zsh-expand has but zsh-abbr does not
- zsh-expand uses aliases and global aliases with no need of separate abbrev-alias command
- zsh-expand expands aliases after builtin/command/sudo/env and linear combinations of these with and without options 
    - `sudo gco<space> => sudo git checkout`
    - `\builtin \command \sudo -u root -E \env gco<space> => \builtin \command \sudo -u root -E \env git checkout`
- zsh-expand expands incorrect spellings and phrases, globs, command/process substitution, =command expansion, history expansion and $parameters

## Bypassing expansion
Expansion can be temporarily bypassed with control-space.  The variable `ZPWR_EXPAND_BLACKLIST` can be set to an array of regular or global aliases which will not be expanded.

You can override the following variables to control expansion.
```sh
# ignore expansion of these regular/global aliases
export ZPWR_EXPAND_BLACKLIST=(g gco)
# aliases expand in first position
export ZPWR_EXPAND=true
# aliases expand in second position after sudo
export ZPWR_EXPAND_SECOND_POSITION=true
# expand globs, history etc with zle expand-word
export ZPWR_EXPAND_NATIVE=true
# spelling correction in zsh-expand plugin
export ZPWR_CORRECT=true
# aliases expand after spelling correction
export ZPWR_CORRECT_EXPAND=true
# expand inside "
export ZPWR_EXPAND_QUOTE_DOUBLE=true
# expand inside '
export ZPWR_EXPAND_QUOTE_SINGLE=false
# expand into history any unexpanded
export ZPWR_EXPAND_TO_HISTORY=false
```

## Optional expansion of unexpanded line into history on enter
If `ZPWR_EXPAND_TO_HISTORY=true` then after running a command line with an unexpanded alias or aliases, the line with the expanded alias or aliases will be in history up 2 lines with the unexpanded line up 1 line. After running another command the unexpanded line will be gone. The unexpanded line is never written to `$HISTFILE`. This is the way zshaddhistory hook functions work when returning 1.

This uses the exact same rules as expand on spacebar so `sudo gco` will expand to `sudo git checkout` into history if you have `alias gco=git checkout` etc...

Globs and the other native expansions are expanded on accept line with:
```sh
# globs etc expand before command line is accepted
export ZPWR_EXPAND_PRE_EXEC_NATIVE=true
```

## Install for Zinit
> `~/.zshrc`
```sh
source "$HOME/.zinit/bin/zinit.zsh"
zinit ice lucid nocompile
zinit load MenkeTechnologies/zsh-expand
```

## Install for Oh My Zsh

```sh
cd "$HOME/.oh-my-zsh/custom/plugins" && git clone https://github.com/MenkeTechnologies/zsh-expand.git
```

Add `zsh-expand` to plugins array in `~/.zshrc`
> `~/.zshrc`
```sh
plugins+=(zsh-expand)
```

## General Install

```sh
git clone https://github.com/MenkeTechnologies/zsh-expand.git
```

source zsh-expand.plugin.zsh in `~/.zshrc`


