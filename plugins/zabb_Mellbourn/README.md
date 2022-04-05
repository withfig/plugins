# zabb

[![License: MIT][license icon]][license]

zabb - a plugin for finding z abbreviations

## Command

I love the [z][zoxide] command. It lets me quickly jump to my favorite directories by typing very few keys.
But - sometimes I give in to my OCD and pause to wonder: _how_ few keys can I get away with?

I can experiment, try different short versions. But this is hit-and-miss, and ironically, it can mess with the ranking and change what abbreviations can be used.

Presenting the solution: `zabb`

`zabb` is a command that tries to figure out the shortest memorable abbreviation of a directory that is usable by `z` to unambiguously jump to that directory.

By default, only abbreviations that start the same way as the directory name are returned.

```text
USAGE:
  zabb [<DIRECTORY>]

ARGS:
  <DIRECTORY>
      Directory to find z abbrevs for. If none is given, it defaults to the current working directory

FLAGS:
  -s or --shortest
      Allow abbreviations even if they do not start the same way as the directory name. (This will often find shorter abbreviations, but they may be less easy to remember)
  -a or --all
      List all (contiguous) abbreviations (implies -s)
  -1 or --one-letter
      List which directories each single-letter abbreviations in the alphabet will result in
  -h or --help
      Print help
```

## Examples

```zsh
~ > ls -d Do*
Documents Downloads
~ > zabb Downloads
d
~ > z d
~/Downloads > cd
~ > zabb Documents
doc
~ > z doc
~/Documents > cd
~ > zabb -s Documents
u
m
e
~ > z u
~ /Documents> cd
~ > zabb -a Documents
u
m
e
t
oc
cu
um
[...]
```

Non-contiguous, i.e. space-separated, abbreviations are not looked for. So, in some fairly rare circumstances, the shortest abbreviations may not be found.

Currently zabb mainly supports the [zoxide][zoxide] implementation of `z`. It works ok with [z.lua][z.lua], [fasd][fasd] and [z][rupa_z], but may not find the shortest abbreviations for those. It may work for other implementations if they support the `z -e` command. I welcome PRs to expand `zabb` to other implementations.

## Installation

### zinit

This plugin is designed as a [zinit][zinit] module, but it's also
compatible with other plugin managers.

You can use [Turbo Mode][turbo mode] to load `zabb`:

```zsh
zinit ice wait'1' lucid
zinit light mellbourn/zabb
```

## License

The MIT License (MIT)

Copyright (c) 2021 Klas Mellbourn

[license icon]: https://img.shields.io/badge/License-MIT-green.svg
[license]: https://opensource.org/licenses/MIT
[zinit]: https://github.com/zdharma/zinit
[turbo mode]: http://zdharma.org/zinit/wiki/INTRODUCTION/#turbo_mode_zsh_53
[zoxide]: https://github.com/ajeetdsouza/zoxide
[z.lua]: https://github.com/skywind3000/z.lua
[fasd]: https://github.com/clvv/fasd
[rupa_z]: https://github.com/rupa/z

