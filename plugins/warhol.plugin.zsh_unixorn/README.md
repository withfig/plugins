# warhol.plugin.zsh

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub stars](https://img.shields.io/github/stars/unixorn/warhol.plugin.zsh.svg)](https://github.com/unixorn/warhol.plugin.zsh/stargazers)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/unixorn/warhol.plugin.zsh/master.svg)](https://github.com/unixorn/warhol.plugin.zsh)
![Superlinter](https://github.com/unixorn/warhol.plugin.zsh/actions/workflows/superlinter.yml/badge.svg)
![Awesomebot](https://github.com/unixorn/warhol.plugin.zsh/actions/workflows/awesomebot.yml/badge.svg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [warhol.plugin.zsh](#warholpluginzsh)
  - [Installing](#installing)
    - [Zgenom](#zgenom)
    - [Antigen](#antigen)
    - [Oh-My-Zsh](#oh-my-zsh)
    - [Without using any frameworks](#without-using-any-frameworks)
  - [Tips](#tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Colorize command output using `grc` (when present) and lscolors.

## Installing

### [Zgenom](https://github.com/jandamm/zgenom)

Add `zgenom load unixorn/warhol.plugin.zsh` to your `.zshrc` with your other load commands.

### [Antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle unixorn/warhol.plugin.zsh` to your .zshrc

### [Oh-My-Zsh](http://ohmyz.sh/)

If you're using [oh-my-zsh](github.com/robbyrussell/oh-my-zsh):

1. In the command line, change to _oh-my-zsh_'s custom plugin directory :

    `cd ~/.oh-my-zsh/custom/plugins/`

2. Clone the repository into a new `warhol` directory in your custom plugins:

    `git clone https://github.com/unixorn/warhol.plugin.zsh.git warhol`

3. Edit your `~/.zshrc` and add `warhol.plugin.zsh` – same as clone directory – to the list of plugins to enable:

    `plugins=( ... warhol )`

4. Then, restart your terminal application to **refresh context** and use the plugin. Alternatively, you can source your current shell configuration:

    `source ~/.zshrc`

### Without using any frameworks

1. `git clone git@github.com:unixorn/warhol.plugin.zsh.git`
2. Add its bin directory to your `$PATH`. If you're using ZSH, you can just add `source /path/to/clone/of/warhol.plugin.zsh` to your `.zshrc` file.

The scripts in here don't actually require you to be using ZSH as your login shell, they're being distributed as a [zgen](https://github.com/tarjoilija/zgen) plugin because that's convenient.

## Tips

Customizing `LSCOLORS` for macOS/BSD and `LS_COLORS` for Linux is a hassle. It's even more of a hassle to keep them in sync across macOS/BSD and Linux.

Fortunately, Geoff Greer made an online tool that makes it easy to customize your color scheme and keep them in sync across Linux and OS X/*BSD available online at [lscolors](http://geoff.greer.fm/lscolors/).

I've included my `LSCOLORS` and `LS_COLORS` settings in this plugin, but they won't be applied if you already have set `LSCOLORS` or `LS_COLORS`.

The easiest way to change them if you use a ZSH framework is to redeclare the variables in your `.zshrc` after your framework loads your plugins.

