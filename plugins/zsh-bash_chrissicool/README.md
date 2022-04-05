Bash ZSH Plugin
==============

This is a ZSH plugin to make the shell more Bash compatible. It redefines the `source`
command to act more like Bash does. It also enables Bash completions.

You may find this plugin useful when you need to source Bash functions in your current
shell. The author of this plugin particularly uses it for AOSP builds in ZSH.

Plugin Installation
-------------------

If you use [Antigen](http://antigen.sharats.me/ "Antigen plugin manager for ZSH"),
add the following line to your plugins list:

    antigen bundle chrissicool/zsh-bash

If you use [Oh-My-Zsh](https://github.com/robbyrussell/oh-my-zsh "OMZ manager for ZSH"),
add `zsh-bash` to your `plugins` list and clone this repository to your
`$ZSH_CUSTOM/plugins` directory:

    $ ( cd $ZSH_CUSTOM/plugins && git clone https://github.com/chrissicool/zsh-bash )

