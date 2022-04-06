# zman

[![License](https://img.shields.io/badge/license-MIT-007EC7)](/LICENSE)
[![works with prezto](https://img.shields.io/badge/works%20with-%E2%9D%AF%E2%9D%AF%E2%9D%AF%20prezto-red)](#install-for-prezto)
[![works with ohmyzsh](https://img.shields.io/badge/works%20with-%20%E2%9E%9C%20oh--my--zsh-C2D33F)](#install-for-oh-my-zsh)

> Use `fzf` to quickly browse Zsh manuals

![zman](https://raw.githubusercontent.com/mattmc3/zman/resources/img/zman.gif)

## Description

This plugin scrapes the Zsh documentation for index words and phrases and lets you
quickly navigate to the online docs. It uses [fzf] to provide fuzzy searching. Be sure
you have it installed prior to using this plugin.

## Why do you need this plugin?

If you have ever tried to find some Zsh documentation from the command line, you know
how tricky that can be. First, you probably try `man` out of habit:

```zsh
% man zstyle
No manual entry for zstyle
```

Then, assuming you have [run-help set up properly](https://stackoverflow.com/questions/4405382/how-can-i-read-documentation-about-built-in-zsh-commands),
maybe you try that.

```zsh
% run-help zstyle
zstyle See the section `The zsh/zutil Module' in zshmodules(1)
```

Instead of taking you where you want to go, it tells you you need to search yet again,
so you do:

```zsh
% run-help zshmodules
# finally, you're in the docs!
# but, you still have to search once more by typing '/zstyle'
```

I got tired of all that and decided there's got to be a better way. With this plugin,
you simply do the following:

```zsh
% zman zstyle
# fuzzy finder opens with your initial 'zstyle' query.
# pick one of the options and your browser opens right to the online manual
```

If you don't want to make a selection, `CTRL-c` cancels as you would expect.

## Installation

### Install with a Zsh plugin manager

To install using a Zsh plugin manager, add the following to your .zshrc

- [pz]: `pz source mattmc3/zman`
- [zcomet]: `zcomet load mattmc3/zman`
- [zgenom]: `zgenom load mattmc3/zman`
- [znap]: `znap source mattmc3/zman`

### Install manually, without a plugin manager

To install manually, first clone the repo:

```zsh
git clone https://github.com/mattmc3/zman ${ZDOTDIR:-~}/.zplugins/zman
```

Then, in your .zshrc, add the following line:

```zsh
source ${ZDOTDIR:-~}/.zplugins/zman/zman.zsh
```

### Install for Oh-My-Zsh

To install with [Oh-My-Zsh][ohmyzsh], first clone the repo from an interactive Zsh session:

```zsh
# make sure your $ZSH_CUSTOM is set
ZSH_CUSTOM=${ZSH_CUSTOM:-~/.oh-my-zsh/custom}

# now, clone the plugin
git clone https://github.com/mattmc3/zman $ZSH_CUSTOM/plugins/zman
```

Then, add the plugin to your Oh-My-Zsh plugins list in your .zshrc

```zsh
# in your .zshrc, add this plugin to your plugins list
plugins=(... zman)
```

### Install for Prezto

To install with [Prezto][prezto], first clone the repo from an interactive Zsh session:

```zsh
# make sure your $ZPREZTODIR is set
ZPREZTODIR=${ZPREZTODIR:-~/.zprezto}
# clone the repo to a prezto contrib dir
git clone https://github.com/mattmc3/zman $ZPREZTODIR/contrib/zman/external
# set up the contrib
echo "source \${0:A:h}/external/zman.plugin.zsh" > $ZPREZTODIR/contrib/zman/init.zsh
```

Then, add the plugin to your Prezto plugins list in .zpreztorc

```zsh
zstyle ':prezto:load' pmodule \
  ... \
  zman \
  ...
```

[ohmyzsh]: https://github.com/ohmyzsh/ohmyzsh
[prezto]: https://github.com/sorin-ionescu/prezto
[zshzoo]: https://github.com/zshzoo/zshzoo
[pz]: https://github.com/mattmc3/pz
[zcomet]: https://github.com/agkozak/zcomet
[zgenom]: https://github.com/jandamm/zgenom
[znap]: https://github.com/marlonrichert/zsh-snap
[fzf]: https://github.com/junegunn/fzf


