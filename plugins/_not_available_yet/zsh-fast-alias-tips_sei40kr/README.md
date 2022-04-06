Helps you remembering the aliases you defined once.

Written in zsh and Go. Ported from [djui/alias-tips](https://github.com/djui/alias-tips).

## Example

```
$ alias gst='git status'

$ git status
💡  gst
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

## Install

### Install with [zinit](https://github.com/zdharma/zinit) (recommended)

```sh
zinit ice from'gh-r' as'program'
zinit light sei40kr/fast-alias-tips-bin
zinit light sei40kr/zsh-fast-alias-tips
```

### Install with [zplug](https://github.com/zplug/zplug)

```sh
zplug sei40kr/fast-alias-tips-bin, from:gh-r, as:command, rename-to:def-matcher
zplug sei40kr/zsh-fast-alias-tips
```

## Customization

| Variable                 | Default value       | Description           |
| :--                      | :--                 | :--                   |
| `FAST_ALIAS_TIPS_PREFIX` | `"💡 $(tput bold)"` | The prefix of the Tips |
| `FAST_ALIAS_TIPS_SUFFIX` | `"$(tput sgr0)"`    | The suffix of the Tips |

