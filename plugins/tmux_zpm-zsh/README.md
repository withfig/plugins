# Zsh plugin for Tmux

A small plugin for Tmux. It will setup the `TERM` variable, and will start `tmux` automaticaliy
when you login via SSH and will show motd in the first window.

Autostart can be disabled (or enabled on local host) by setting the variable `TMUX_AUTOSTART=false`, and  
motd display can be disabled by setting `TMUX_MOTD=false`

### Example

```sh
PROMPT='$pr_node ...REST OF PROMPT'
```

This plugin is made to be fast. It runs in background and updates information only when needed.

## Installation

### If you use [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

* Clone this repository into `~/.oh-my-zsh/custom/plugins`
```sh
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zpm-zsh/tmux
```
* After that, add `tmux` to your oh-my-zsh plugins array.

### If you use [Zgen](https://github.com/tarjoilija/zgen)

1. Add `zgen load zpm-zsh/tmux` to your `.zshrc` with your other plugin
2. run `zgen save`

### If you use my [ZPM](https://github.com/zpm-zsh/zpm)

* Add `zpm load zpm-zsh/tmux` into your `.zshrc`

