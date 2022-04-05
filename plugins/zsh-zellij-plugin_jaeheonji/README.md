# Zsh Plugin for Zellij

This plugin provides a terminal environment that uses [zellij](https://github.com/zellij-org/zellij) as a default.

Most of the contents refer to [oh-my-zsh/tmux](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tmux). Thank you so much :smile:

## Installation

### Manual

Clone the Repository:

```bash
git clone https://github.com/jaeheonji/zsh-zellij-plugin
```

Add the following to your `.zshrc`:

```bash
source ~/path/to/zsh-zellij-plugin/zellij.plugin.zsh
```

### Oh-My-Zsh

Clone the Repository:

```bash
git clone https://github.com/jaeheonji/zsh-zellij-plugin ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zellij
```

Add `zellij` to your plugin list in `.zshrc`.

```bash
plugins=(
    ...
    zellij
)
```

## Configuration Variables

| Variable                 | Description                                                                       |
|--------------------------|-----------------------------------------------------------------------------------|
| `ZSH_ZELLIJ_AUTOSTART`   | Automatically starts zellij (default: `false`)                                    |
| `ZSH_ZELLIJ_AUTOCONNECT` | Automatically connect to a previous session if it exits (default: `true`)         |
| `ZSH_ZELLIJ_AUTOQUIT`    | Automatically closes terminal once zellij exits (default: `ZSH_ZELLIJ_AUTOSTART`) |
| `ZSH_ZELLIJ_LAYOUT`      | Set the default layout file in the layout directory                               |
| `ZSH_ZELLIJ_LAYOUT_PATH` | Set the default path of layout yaml file                                          |

When `ZSH_ZELLIJ_LAYOUT` and `ZSH_ZELLIJ_LAYOUT_PATH` are used together, `LAYOUT` has priority.

## License

[MIT license](LICENSE)
