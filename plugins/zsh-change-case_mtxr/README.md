# ZSH Change Case Plugin

## Table of contents

1. [Instalation](#instalation)
  1. [Antibody plugin manager](#antibody-plugin-manager)
  2. [Using Git](#using-git)
2. [Usage](#usage)

## Instalation

### Antibody plugin manager

To install using Antibody, just add this in your `~/.zshrc`:

```
# your .zshrc file
antibody bundle mtxr/zsh-change-case
```

### Using Git

Install `zsh-change-case` by cloning the repository:

```shellscript
$ git clone https://github.com/mtxr/zsh-change-case.git ${HOME}/.zsh-change-case
```

After cloning, just laod it to your `~/.zshrc` adding this line:
```shellscript
# your .zshrc file
. ${HOME}/.zsh-change-case
```

## Usage

I recomend you to use the following bindkeys (inspired by VSCode and Sublime Text):
* <kbd>Ctrl+K</kbd> + <kbd>Ctrl+U</kbd> to uppercase
* <kbd>Ctrl+K</kbd> + <kbd>Ctrl+L</kbd> to lowercase

```shellscript
bindkey '^K^U' _mtxr-to-upper # Ctrl+K + Ctrl+U
bindkey '^K^L' _mtxr-to-lower # Ctrl+K + Ctrl+L
```

In case of trouble, you probably need to unbind <kbd>Ctrl+K</kbd>. Just add this before the bindings you will use:

```shellscript
bindkey -r '^K'
```

![Example](https://github.com/mtxr/zsh-change-case/raw/master/images/example-1.gif?raw=true)

