Zsh plugin for ls. It improves the output of `ls`, and adds the following aliases:

* `l` - show files
* `ls` - show files
* `la` - show all files
* `ll` - show files line by line

![screenshot](https://github.com/zpm-zsh/ls/raw/master/ls.png)

This plugin supports [exa](https://github.com/ogham/exa), if installed and no `ZSH_LS_PREFER_LS` is defined as environment variable then:

* `l` - show files, without git ignored
* `ls` - show files
* `la` - show all files
* `ll` - show files line by line

![screenshot](https://github.com/zpm-zsh/ls/raw/master/exa.png)

#### Note
For a better view, use a theme for `dircolors`, for example [dircolors-material](https://github.com/zpm-zsh/dircolors-material)
