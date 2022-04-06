# zsh-tmux-auto-title

ZSH plugin for tmux that automatically sets the title of windows/panes as the current foreground command.

![zsh-tmux-auto-title](zsh-tmux-auto-title.gif)

## Installation

### Manual

```
git clone --depth=1 https://github.com/mbenford/zsh-tmux-auto-title ~/zsh-tmux-auto-title
echo "source ~/zsh-tmux-auto-title/zsh-tmux-auto-title.plugin.zsh" >>! ~/.zshrc
```

### Oh My Zsh:

```
git clone --depth=1 https://github.com/mbenford/zsh-tmux-auto-title ${ZSH_CUSTOM:~/.oh-my-zsh/custom}/plugins
```

Add `zsh-tmux-auto-title` to `plugins` in `.zshrc`.

## Usage

This plugin automatically issues escape sequences to set the title of the window/pane as the current running command. By default the whole command line is used, but you can make it shorter if you want. You can also set what the title looks like when no command is running. See [configuration](#configuration) for more details.

### Panes

By default tmux displays pane titles on the left side of the status line. If you are employing a custom status line, make sure `#T` (or `pane_title`) is used somewhere. You can also use `pane-border-status` and `pane-border-style` to display the titles of all panes at once. See [tmux manual](https://www.man7.org/linux/man-pages/man1/tmux.1.html) for more information.

### Windows

Tmux won't allow programs to rename windows unless `allow-rename` is `on`. So make sure to add `set -g allow-rename on` to your `.tmux.conf` file if you want to rename windows.

If you are using Oh My Zsh you should also set `DISABLE_AUTO_TITLE=true` in your `.zshrc` file so it won't conflict with this plugin.

## Configuration


| Variable | Description |
|-|-|
| `ZSH_TMUX_AUTO_TITLE_TARGET` | Sets whether the `window` title or the `pane` title should be changed. Defaults to `pane`. |
| `ZSH_TMUX_AUTO_TITLE_SHORT` | Displays only the command name, instead of the full command line. Defaults to `false`. |
| `ZSH_TMUX_AUTO_TITLE_SHORT_EXCLUDE` | Regular expression that defines what commands should never be shortened. Defaults to `""`. |
| `ZSH_TMUX_AUTO_TITLE_EXPAND_ALIASES` | Determines whether aliases should be expanded or kept as is. Defaults to `true`. |
| `ZSH_TMUX_AUTO_TITLE_IDLE_TEXT` | Text to be used when no command is running. It can be either a plain string or one of the following variables: <br>`%pwd`: current directory; <br>`%shell`: current shell;<br>`%last`: last command, prefixed by an exclamation mark.<br>Defaults to `%shell`. |
| `ZSH_TMUX_AUTO_TITLE_IDLE_DELAY` | Delay, in seconds, before the idle text is displayed. Defaults to `1`. |
| `ZSH_TMUX_AUTO_TITLE_PREFIX` | A prefix added to the title, Defaults to `""`. |


