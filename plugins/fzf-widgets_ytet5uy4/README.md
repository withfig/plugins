[Overview](#overview) |
[Requirements](#requirements) |
[Usage](#usage) |
[Configuration](#configuration) |
[License](#license)

[![license-badge]][license-link]
[![release-badge]][release-link]

## Overview

This repository manage ZLE widgets of fzf.
Available widgets can check [here][widgets-link].

![screenshot]

### Pros

* Can map widgets to whatever key you like
* Can easily install with plugin manager
* Can use with [zsh-autosuggestions][zsh-autosuggestions-link]
* Show error messages with `$POSTDISPLAY`
* All widgets are autoloaded function

## Requirements

`zsh`: version 5.0.2 or higher

## Usage

1. Map widgets to key with `bindkey` command
1. Execute widget with mapped key

## Configuration

You can map widgets to key and specify options of `fzf` to widgets.
For example, add the following to your `.zshrc`:

```zsh
if zplug check 'ytet5uy4/fzf-widgets'; then
  # Map widgets to key
  bindkey '^@'  fzf-select-widget
  bindkey '^@.' fzf-edit-dotfiles
  bindkey '^@c' fzf-change-directory
  bindkey '^@n' fzf-change-named-directory
  bindkey '^@f' fzf-edit-files
  bindkey '^@k' fzf-kill-processes
  bindkey '^@s' fzf-exec-ssh
  bindkey '^\'  fzf-change-recent-directory
  bindkey '^r'  fzf-insert-history
  bindkey '^xf' fzf-insert-files
  bindkey '^xd' fzf-insert-directory
  bindkey '^xn' fzf-insert-named-directory

  ## Git
  bindkey '^@g'  fzf-select-git-widget
  bindkey '^@ga' fzf-git-add-files
  bindkey '^@gc' fzf-git-change-repository

  # GitHub
  bindkey '^@h'  fzf-select-github-widget
  bindkey '^@hs' fzf-github-show-issue
  bindkey '^@hc' fzf-github-close-issue

  ## Docker
  bindkey '^@d'  fzf-select-docker-widget
  bindkey '^@dc' fzf-docker-remove-containers
  bindkey '^@di' fzf-docker-remove-images
  bindkey '^@dv' fzf-docker-remove-volumes

  # Enable Exact-match by fzf-insert-history
  FZF_WIDGET_OPTS[insert-history]='--exact'

  # Start fzf in a tmux pane
  FZF_WIDGET_TMUX=1
fi
```

## License

Copyright (c) 2017 ytet5uy4

Released under the MIT License, see **[LICENSE.md][license-link]**.

[screenshot]: https://image.ytet5uy4.com/170920162058.png
[release-badge]: https://img.shields.io/github/release/ytet5uy4/fzf-widgets.svg?style=flat-square
[license-badge]: https://img.shields.io/github/license/ytet5uy4/fzf-widgets.svg?style=flat-square

[release-link]: //github.com/ytet5uy4/fzf-widgets/releases/latest
[license-link]: LICENSE.md
[zsh-autosuggestions-link]: //github.com/zsh-users/zsh-autosuggestions
[widgets-link]: //github.com/ytet5uy4/fzf-widgets/tree/master/autoload/widgets
[ghq-link]: //github.com/motemen/ghq

