# docker-enter-completion

Command completion for `docker-enter` (https://github.com/jpetazzo/nsenter)

These little scripts will just autocomplete the `docker-enter` command with the docker container name you wish to (ns)enter.

## Installation

Requirements: `perl`.

### Bash

```bash
$ git clone https://github.com/runcom/docker-enter-completion.git \
  $HOME/.docker-enter-completion
$ echo "[[ -s $HOME/.docker-enter-completion/docker-enter-completion.bash  ]] \
  && source $HOME/.docker-enter-completion/docker-enter-completion.bash" \
  >> $HOME/.bashrc # or equivalent bash rc script
$ # restart your shell or simply source .bashrc to get started
```

### Zsh

```zsh
$ git clone https://github.com/runcom/docker-enter-completion.git \
  $HOME/.docker-enter-completion
$ sed -i '1s/^/fpath=(".docker-enter-completion/" $fpath)\nautoload -U compinit\ncompinit\n/' \
  $HOME/.zshrc # or equivalent zsh rc script
$ # restart your shell or simply source .zshrc to get started
```

### Zsh/oh-my-zsh

Assuming you have a working `oh-my-zsh` installation under `$HOME/.oh-my-zsh/`

```zsh
$ mkdir -p $HOME/.oh-my-zsh/custom/plugins/docker-enter/
$ wget https://raw.githubusercontent.com/runcom/docker-enter-completion/master/oh-my-zsh/custom/plugins/docker-enter/docker-enter.plugin.zsh \
  $HOME/.oh-my-zsh/custom/plugins/docker-enter/docker-enter-plugin.zsh
```

Then simply add `docker-enter` in your `.zshrc` plugins' list, restart or source `.zshrc` and get started!

## Demo

![](https://i.imgur.com/POQL7cn.gif)

