# ZSH Tab Title

[![GitHub version](https://badge.fury.io/gh/trystan2k%2Fzsh-tab-title.svg)](https://badge.fury.io/gh/trystan2k%2Fzsh-tab-title)

![Build](https://github.com/trystan2k/zsh-tab-title/workflows/CI-workflow/badge.svg)

A zsh plugin that allows you to set a terminal header like any of PROMPT

A ZSH plugin that automatically sets terminal tab titles based on current location and task.

This is completely based on [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh) term support library.

## Installation

### Using [zinit](https://github.com/zdharma/zinit)

Add `zinit light trystan2k/zsh-tab-title` into `.zshrc`

### Using [zpm](https://github.com/zpm-zsh/zpm)

Add `zpm load trystan2k/zsh-tab-title` into `.zshrc`

### Using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Execute `git clone https://github.com/trystan2k/zsh-tab-title ~/.oh-my-zsh/custom/plugins/zsh-tab-title`. Add `zsh-tab-title` into plugins array in `.zshrc`

### Using [antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle trystan2k/zsh-tab-title` into `.zshrc`

### Using [zgen](https://github.com/tarjoilija/zgen)

Add `zgen load trystan2k/zsh-tab-title` into `.zshrc`

## Configuration

You can configure the prefix and/or suffix to be showed in tab title, besides the current folder.

### DISABLE

You can disable the plugin adding

```sh
ZSH_TAB_TITLE_DISABLE_AUTO_TITLE=true
```

### CURRENT FOLDER

You can display in the tab title, just the last folder you are in. So for example, if you are at `/home/user/zsh-tab-title`, the tab will only display `zsh-tab-title`. The default behavior, it will show the complete path, truncated at 20 chars. To enable current folder only, do:

```sh
ZSH_TAB_TITLE_ONLY_FOLDER=true
```

### CONCAT FOLDER AND PROCESS

When executing a command, it is showed in the tab title. You can setup to concatenate the current folder to it, so it can display, for example, `zsh-tab-title:ls`, when doing a `ls` in `/home/user/zsh-tab-title`. To enable concat folder and process, do:

```sh
ZSH_TAB_TITLE_CONCAT_FOLDER_PROCESS=true
```

### FULL COMMAND

Enable to show the full command being run with it's arguments in the tab title. For example, ``nano .zshrc`` will show ``nano .zshrc`` instead of just ``nano``. Default is to display only the command without it's arguments.

```sh
ZSH_TAB_TITLE_ENABLE_FULL_COMMAND=true
```

### PREFIX

The prefix can be configured using the variable `ZSH_TAB_TITLE_PREFIX` and it will be added **before** the current folder, in tab title. For example:

```sh
ZSH_TAB_TITLE_PREFIX='$USER@$HOST - '
```

By default, if no value is informed, it is used the value `%m@%n:` which will show the user name and computer name, separated by @. For example: `trystan2k@MyPC: /home/trystan2k`. This default value can be disabled if variable `ZSH_TAB_TITLE_DEFAULT_DISABLE_PREFIX` is set to try. For example:

```sh
ZSH_TAB_TITLE_DEFAULT_DISABLE_PREFIX=true
```

### SUFFIX

The suffix can be configured using the variable `ZSH_TAB_TITLE_SUFFIX` and it will be added **after** the current folder, in tab title. For example:

```sh
ZSH_TAB_TITLE_SUFFIX='- $USER'
```

This variable has no default value, so if nothing is informed, no suffix is added

### ADDITIONAL TERMS

By default the tab title is set for iTerm, Hyper, and where ``$TERM`` is set to one of ``cygwin,xterm*,putty*,rxvt*,ansi,screen*,tmux*``
Additional $TERMS to set the tab title for can be configured with the variable ``ZSH_TAB_TITLE_ADDITIONAL_TERMS``. For example:

```sh
ZSH_TAB_TITLE_ADDITIONAL_TERMS='alacritty|kitty|foot'
```

This variable has no default value, so if nothing is informed, no suffix is added

