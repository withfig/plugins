Search shell history with [peco](https://github.com/peco/peco) when pressing
ctrl+r.

Based on [zsh-history-search](https://github.com/mooz/percol#zsh-history-search)
snippet from [percol](https://github.com/mooz/percol).

![screenshot](https://github.com/jimeh/zsh-peco-history/raw/master/screenshot.png)

## Usage

1. Press ctrl+r while in a zsh shell and it should load up peco with your
   shell's history.
2. Start typing to filter history down.
3. Press enter/return to pick a command from history.

## Requirements

- [peco](https://github.com/peco/peco)
- [zsh](https://www.zsh.org/)
- `tac`, or `tail` with support for `-r` option.
- `perl`, `awk`, or `uniq` if de-duplication is turned on.


## Configuration Options

### `ZSH_PECO_HISTORY_OPTS`

Command-line arguments passed to `peco`. Defaults to `--layout=bottom-up` if the
variable is not set.

A lot of the Peco options available on the command-line, are also available via
Peco's config file. It's up to you how you want to manage your Peco settings.

For example, if you want to use the `bottom-up` layout, and change to fuzzy
filtering:

```bash
ZSH_PECO_HISTORY_OPTS="--layout=bottom-up --initial-filter=Fuzzy"
```

### `ZSH_PECO_HISTORY_DEDUP`

De-duplicates all history entries before they are handed over to peco. Disabled
by default.

To enable, set the `ZSH_PECO_HISTORY_DEDUP` environment variable to a non-zero
value before zsh-peco-history is loaded.

This is useful if you often have a lot of duplicate entries when searching
through your history. However in that case it often enough to configure ZSH to
not save duplicate commands to history in the first place. This can be done by
setting the following options:

```
setopt HIST_EXPIRE_DUPS_FIRST
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_FIND_NO_DUPS
setopt HIST_SAVE_NO_DUPS
```

[Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) for example sets the
above options, and more in it's
[`history.zsh`](https://github.com/mattjj/my-oh-my-zsh/blob/b1d4bab329456e9a4af49237064d9a3b6566f1b0/history.zsh)
file.

## Recommended Peco Config

You don't have to use this config, it's simply what I personally use. So here's
what my `~/.peco/config.json` file looks like:

```json
{
  "Keymap": {
    "M-v": "peco.ScrollPageUp",
    "C-v": "peco.ScrollPageDown",
    "C-g": "peco.Cancel",
    "M-Space": "peco.ToggleRangeMode",
    "M-c": "peco.CancelRangeMode"
  },
  "Style": {
    "Basic": ["on_default", "default"],
    "Matched": ["cyan"],
    "Query": ["default"],
    "SavedSelection": ["on_blue", "white"],
    "Selected": ["on_magenta", "default"]
  }
}
```

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

