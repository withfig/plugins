# More Vi Motions

[![Gitter](https://badges.gitter.im/zsh-vi-more/community.svg)](https://gitter.im/zsh-vi-more/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Matrix](https://img.shields.io/matrix/zsh-vi-more_community:gitter.im)](https://matrix.to/#/#zsh-vi-more_community:gitter.im)

Add more Vi Motions

## Motions added:


| New\* | Map | Keybinding | Motion |
| --- | --- | --- | --- |
| No | `vicmd` `viins` | `\e[H` `\e[F` (Home/End) | beginning/end of line |
| No | `vicmd` `viopp` | `a'` `a"` ```a` ``` | select a quoted string or backticks |
| No | `vicmd` `viopp` | `i'` `i"` ```i` ``` | select in a quoted string or backticks |
| No | `vicmd` `viopp` | `a(` `a[` `a{` `a<` `ab` `a)` `a]` `a}` `a>` `aB` | select a bracketed segment |
| No | `vicmd` `viopp` | `i(` `i[` `i{` `i<` `ib` `i)` `i]` `i}` `i>` `iB` | select in a bracketed segment |
| No\*\* | `vicmd` | `cs` `ds` `ys` | change/delete/add surrounding quotes/brackets |
| No | `visual` | `S` | add surrounding quotes/brackets |
| Yes | `viopp` | `v`[motion] | Force motion character-wise, or toggle exclusivity (see `:h forced-motion` in Vim) |
| Yes | `vicmd` `viopp` `visual` | `)` `(` `g)` `g(` | move forward/back to start/end of command |
| Yes | `vicmd` `viopp` | `as` `aS` | select a command |
| Yes | `vicmd` `viopp` | `is` `iS` | select in a command (exclude terminating `;` and control flow words) |
| Yes | `vicmd` `viopp` `visual` | _(Not enabled by default)_ | Move forward/back to start/end of `$WORDCHARS`-dependant words |
| Yes | `vicmd` `viopp` `visual` | _(Not enabled by default)_ | Move forward/back to start/end of shell words |

_\*("New": Plugins marked as "not new" are distributed with Zsh and are simply loaded by this plugin.
Plugins marked as "new" are written and maintained in this repo.)_

_\*\*(The `cs` `ds` `ys` commands don't work well by default due to KEYTIMEOUT problems/conflicting with the `c` `d` `y` commands. I wrap `c` `d` `y` here, this lets me fix this problem.)_

## Future additions(?):

*Select in/a command list* (Note, `[;]` is any kind of command terminator)

- Between `[;]while`/`[;]until`/`[;]repeat` and `[;]do`/`{`/`(`
- Between `[;]select` and `[;]do`/`{`/`(`
- Between `[;]case` and `[;]esac`
- Between `[;]do` and `[;]done`
- Between `[;]if`/`[;]elif` and `[;]then`
- Between `[;]then` and `[;]elif`/`[;]fi`
- Between `[;]{` and `}[;]` or `[;](` and `)[;]`

