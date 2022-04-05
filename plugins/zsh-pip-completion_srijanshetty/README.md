Advanced pip completion for zsh
===============================

Simple completion function that can complete PyPI package names.

Installation
============

### Manual Installation
1. Copy `_pip` file into `~/.zshfuncs` folder.
2. Add this folder to your functions path before loading completion in your `~/.zshrc`.

Example:

    # completion
    fpath=(~/.zshfuncs $fpath)
    autoload -U compinit
    compinit

### Antigen
1. Just run the following command

```shell
antigen bundle srijanshetty/zsh-pip-completion
```


