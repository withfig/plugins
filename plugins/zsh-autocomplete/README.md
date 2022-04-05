`zsh-autocomplete` adds **real-time type-ahead autocompletion** to Zsh. Find as you type, then
press <kbd>Tab</kbd> to insert the top completion, <kbd>Shift</kbd><kbd>Tab</kbd> to insert the
bottom one, or <kbd>↓</kbd>/<kbd>PgDn</kbd> to select another completion.

[![file-search](images/file-search.gif)](https://asciinema.org/a/377611)

> Enjoy using this software? [Become a sponsor!](https://github.com/sponsors/marlonrichert).

## Other Features
Besides live autocompletion, `zsh-autocomplete` comes with many other useful completion features.

### Optimized completion config
Zsh's completion system is powerful, but hard to configure. So, `zsh-autocomplete` [does it for
you](scripts/.autocomplete.config), while providing a manageable list of [configuration
settings](.zshrc) for changing the defaults.

### Live history search
Press <kbd>Ctrl</kbd><kbd>R</kbd> or <kbd>Ctrl</kbd><kbd>S</kbd> to do live, multi-line history
search.

[![history-search](images/history-search.gif)](https://asciinema.org/a/379844)

### History menu
Press <kbd>↑</kbd> (or <kbd>Alt</kbd><kbd>↑</kbd> or <kbd>PgUp</kbd>) to open a menu with the last
16 history items. If the command line is not empty, then the contents of the command line are used
to perform a fuzzy history search.

![history menu](images/history-menu.png)

### Multi-selection
Press <kbd>Ctrl</kbd><kbd>Space</kbd> in the completion menu or the history menu to insert more
than one item.

![multi-select](images/multi-select.png)

### Recent dirs completion
Works out of the box with zero configuration, but also supports `zsh-z`, `zoxide`, `z.lua`,
`rupa/z.sh`, `autojump` and `fasd`.

![recent dirs](images/recent-dirs.png)

## Key Bindings

On the command line:
| Key(s) | Action | <sub>[Widget](.zshrc)</sub> |
| ------ | ------ | --- |
| <kbd>Tab</kbd> | Accept top completion | <sub>`complete-word`</sub> |
| <kbd>Shift</kbd><kbd>Tab</kbd> | Accept bottom completion | <sub>`complete-word`</sub> |
| <kbd>Ctrl</kbd><kbd>Space</kbd> | Show additional completions | <sub>`list-expand`</sub> |
| <kbd>↓</kbd> | Cursor down (if able) or completion menu | <sub>`down-line-or-select`</sub> |
| <kbd>PgDn</kbd> / <kbd>Alt</kbd><kbd>↓</kbd> | Completion menu (always) | <sub>`menu-select`</sub> |
| <kbd>↑</kbd> | Cursor up (if able) or [history menu](#history-menu) | <sub>`up-line-or-search`</sub> |
| <kbd>PgUp</kbd> / <kbd>Alt</kbd><kbd>↑</kbd> | [History menu](#history-menu) (always) | <sub>`history-search`</sub> |
| <kbd>Ctrl</kbd><kbd>R</kbd> | [Live history search](#live-history-search), newest to oldest | <sub>`history-incremental-search-backward`</sub> |
| <kbd>Ctrl</kbd><kbd>S</kbd> | [Live history search](#live-history-search), oldest to newest | <sub>`history-incremental-search-forward`</sub> |

In the completion menu:
| Key(s) | Action |
| ------ | ------ |
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> | Change selection |
| <kbd>Alt</kbd><kbd>↑</kbd> | Backward one group |
| <kbd>Alt</kbd><kbd>↓</kbd> | Forward one group |
| <kbd>PgUp</kbd> / <kbd>PgDn</kbd> | Page up/down |
| <kbd>Ctrl</kbd><kbd>R</kbd> | Full text search or previous search match |
| <kbd>Ctrl</kbd><kbd>S</kbd> | Full text search or next search match |
| <kbd>Ctrl</kbd><kbd>Space</kbd> | Multi-select |
| <kbd>Tab</kbd> | Accept selection |
| <kbd>Shift</kbd><kbd>Tab</kbd> | Accept bottom completion |
| <kbd>Enter</kbd> | Accept command line |
| most other keys | Accept selection, then perform usual action |

In the history menu:
| Key(s) | Action |
| --- | --- |
| <kbd>↑</kbd>/<kbd>↓</kbd> | Change selection |
| <kbd>Ctrl</kbd><kbd>Space</kbd> | Multi-select |
| <kbd>Tab</kbd> | Accept selection |
| <kbd>Enter</kbd> | Accept command line |
| most other keys | Accept selection, then perform usual action |
