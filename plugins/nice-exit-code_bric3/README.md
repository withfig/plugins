nice-exit-code plugin for oh-my-zsh
===================================

[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) plugin that maps exit status code to human readable string.

For example : 

Warning (`1`) : 

```bash
~/.oh-my-zsh-custom/plugins/nice-exit-code ± ❯ git pull origin master:master
From github.com:bric3/nice-exit-code
 ! [rejected]        master     -> master  (non-fast-forward)
↪ WARN ~/.oh-my-zsh-custom/plugins/nice-exit-code ± ❯
```

Command no found (`127`) :

```bash
~/.oh-my-zsh-custom/plugins/nice-exit-code ± ❯ fail
zsh: command not found: fail
↪ CNOTFOUND ~/.oh-my-zsh-custom/plugins/nice-exit-code ± ❯
```

Interrupted (`130`)

```bash
...
* d4eb1c2 - (grin/master) adds grin config (2014-06-21 22:37:14 +0200) Brice Dutheil <brice.dutheil@gmail.com>
* 9447ccb - Adds oh-my-git PR link (2014-06-18 18:07:43 +0200) Brice Dutheil <brice.dutheil@gmail.com>

↪ INT ~ ○ ❯
```


There's no real specifications for status codes, however some are commonly admitted for most programs, the mapping is inspired by [this script](https://github.com/Valodim/zsh-prompt-powerline/blob/master/hooks/prompt-exitnames.zsh)

This function replaces the exit status number with its associated signal name name. Note we can't know for sure if these return codes are actually caused by the signals, but usually they are, since few programs output exit codes superior to `128` for error conditions.
If no matching codes then output the raw code.

## Install it

This install assume the current shell is ZSH with oh-my-zsh already installed.

Install a clone of this repository in oh-my-zsh plugin custom folder. *Note it is possible to change the default custom directory of oh-my-zsh by redefining the $ZSH_CUSTOM in the .zshrc *

```bash
mkdir -p $ZSH_CUSTOM/plugins
git clone git@github.com:bric3/nice-exit-code.git $ZSH_CUSTOM/plugins/nice-exit-code
```

This will make oh-my-git available as a plugin for oh-my-zsh. Now you still need to activate it. In your .zshrc just activate the plugin by adding oh-my-git to the plugins variable :

```
plugins=(
 # custom plugins
 nice-exit-code
 oh-my-git

 # bundled plugins
 git
 osx
 mosh
 ...
```

Then to use it in a theme just add `$(nice_exit_code)` anywhere in your ZSH shell prompt.

```bash
PROMPT='$(nice_exit_code) %n@%m > '
```


