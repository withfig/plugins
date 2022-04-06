# ZSH-iTerm2

[![License: GPL-2.0][license icon]][license]

Pack iTerm's ZSH integration scripts into a ZSH plugin, avoid polluting your
`$HOME` directory, with negligible time increase of 2ms.

## Installation

### [zplugin][zplugin]

The only ZSH plugin manager solves the time-consuming init for `nvm`, `nodenv`, `pyenv`, `rvm`, `rbenv`, `thefuck`, `fasd`, etc, with its amazing async [Turbo Mode][turbo mode].

```zsh
zplugin ice pick'init.zsh' compile'*.zsh'
zplugin light laggardkernel/zsh-iterm2
```

### [prezto][prezto]

The only framework does **optimizations** in plugins with sophisticated coding skill:
- [refreshing `.zcompdump` every 20h][prezto zcompdump 1]
- [compiling `.zcompdump` as bytecode in the background][prezto zcompdump 2]
- [caching init script for fasd][prezto fasd]
- saving `*env` startup time with [`init - --no-rehash` for `rbenv`, `pyenv`, `nodenv`][prezto *env]
- [removing the horribly time-consuming `brew command` from `command-not-found`][prezto brew command]

```zsh
mkdir -p ${ZDOTDIR:-$HOME}/.zprezto/contrib &>/dev/null
git clone https://github.com/laggardkernel/zsh-iterm2.git ${ZDOTDIR:-$HOME}/.zprezto/contrib/zsh-iterm2
```

## License

The GPL-2.0-only License

Copyright (c) 2019 laggardkernel

[license icon]: https://img.shields.io/badge/License-GPL--2.0-blue.svg
[license]: https://opensource.org/licenses/GPL-2.0
[zplugin]: https://github.com/zdharma/zplugin
[turbo mode]: https://github.com/zdharma/zplugin#turbo-mode-zsh--53
[prezto]: https://github.com/sorin-ionescu/prezto
[prezto zcompdump 1]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/completion/init.zsh#L31-L41
[prezto zcompdump 2]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/runcoms/zlogin#L9-L15
[prezto fasd]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/fasd/init.zsh#L22-L36
[prezto *env]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/python/init.zsh#L22
[prezto brew command]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/command-not-found/init.zsh

