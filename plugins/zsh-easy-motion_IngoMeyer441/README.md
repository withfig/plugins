This plugin brings Vim's [easy-motion](https://github.com/easymotion/vim-easymotion) plugin to zsh. It is inspired by
[zce.zsh](https://github.com/hchbaw/zce.zsh). Unfortunately, zce.zsh only supports the seek operation of easy-motion so
I have started my own implementation that adds much more easy-motion movements. Currently, the following motions are
supported: `b`, `B`, `w`, `W`, `e`, `E`, `ge`, `gE`, `j`, `J`, `k`, `K` `f`, `F`, `t`, `T`, `c` (camelCase).

## Requirements

This plugin needs Python 2.7 or 3.3+. You can check your installed Python version with

```bash
python --version
```

If you are running a recent Linux distribution or macOS, an appropriate Python version should already be installed.

## Usage

Press the configured prefix key (for example `space`) in vi command mode and enter a vi motion command. Possible jump
targets are highlighted by red letters. Press one of the highlighted letters to jump to the corresponding position
directly.

This plugin also works in operator-pending mode.

### Grouping

If more jump targets exist than configured target keys, targets will be grouped and a second key press is needed to
determine the jump target (see the [demo](#demo) for an example). Groups always contain a preview of the next key which
is needed to reach the target position. The grouping works exactly like the grouping mechanism in Vim's easymotion
plugin.

The grouping algorithm works recursively, so grouping is repeated if necessary. However, that case should only occur if
a small set of target keys was configured.

## Configuration

### Target keys

The target keys can be configured with the `EASY_MOTION_TARGET_KEYS` environment variable. The default is taken from the
Vim default configuration value:

```zsh
EASY_MOTION_TARGET_KEYS="asdghklqwertyuiopzxcvbnmfj;"
```

You can configure as many keys as you want (minimum two keys).

### Colors

The color of dimmed and highlighted text can be configured by setting four environment variables. These are the default
settings:

```zsh
EASY_MOTION_DIM="fg=242"
EASY_MOTION_HIGHLIGHT="fg=196,bold"
EASY_MOTION_HIGHLIGHT_2_FIRST="fg=11,bold"
EASY_MOTION_HIGHLIGHT_2_SECOND="fg=3,bold"
```

These settings were used in the demo:

```zsh
EASY_MOTION_DIM="fg=242"
EASY_MOTION_HIGHLIGHT="fg=196,bold"
EASY_MOTION_HIGHLIGHT_2_FIRST="fg=#ffb400,bold"
EASY_MOTION_HIGHLIGHT_2_SECOND="fg=#b98300,bold"
```

Visit the [zsh docs](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Character-Highlighting) for a
description of possible highlights and http://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html for a listing
of possible color codes.

## Other plugins

If you like this plugin and use tmux, please also try my tmux easy-motion port:
[tmux-easy-motion](https://github.com/IngoMeyer441/tmux-easy-motion).

