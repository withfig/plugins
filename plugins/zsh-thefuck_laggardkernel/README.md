# thefuck

[![License: MIT][license icon]][license]

ZSH plugin. Initialize `thefuck` with cache support, which reduce the loading
time dramatically. ( 120ms -> 2ms )

This plugin is designed as a [Prezto][prezto] module, but it's also
compatible with other plugin managers.

## Installation

### [Zplugin][zplugin]

The only ZSH plugin manager solves the time-consuming init for
`nvm`, `nodenv`, `pyenv`, `rvm`, `rbenv`, `thefuck`, `fasd`, etc,
with its amazing async [Turbo Mode][turbo mode].

```zsh
zplugin ice wait'1' lucid
zplugin light laggardkernel/zsh-thefuck
```

### [Prezto][prezto]

The only framework does **optimizations** in plugins with sophisticated coding skill:
- [refreshing `.zcompdump` every 20h][prezto zcompdump 1]
- [compiling `.zcompdump` as bytecode in the background][prezto zcompdump 2]
- [caching init script for fasd][prezto fasd]
- saving `*env` startup time with [`init - --no-rehash` for `rbenv`, `pyenv`, `nodenv`][prezto *env]
- [removing the horribly time-consuming `brew command` from `command-not-found`][prezto brew command]

```zsh
mkdir -p ${ZDOTDIR:-$HOME}/.zprezto/contrib 2>/dev/null
git clone https://github.com/laggardkernel/zsh-thefuck.git ${ZDOTDIR:-$HOME}/.zprezto/contrib/thefuck
```

## Settings

### Alias
The default alias for `thefuck` is `fuck`, you can customize the alias,

```zsh
zstyle ":prezto:module:thefuck" alias "damn"
```

### Key bindings
Key binding <kbd>Esc Esc</kbd> is enabled to trigger function `fuck-command-line`
to input the last rectified commands in the shell quickly. You can disable
this auto keybinding behavior and set your own keybinding with,

```zsh
# disable the default keybinding
zstyle ":prezto:module:thefuck" bindkey "no"

# customize your own keybinding
bindkey "\e\e" fuck-command-line
```

### Conf File Location for Freshness Comparison
By default, this module compares the freshness between `.zprezto` and the cache file. Once the `.zprezto` is modified and newer than the cache file, the
cache will be regenerated.

If you're not using Prezto, you may want to change the conf file used in the
freshness comparison.

```zsh
zstyle ":prezto:runcom" zpreztorc "$HOME/.config/zsh/.zshrc"
```

## Credit

The shortcut function `fuck-command-line` is borrowed from [oh-my-zsh/plugins/thefuck][omz-thefuck].

## License

The MIT License (MIT)

Copyright (c) 2019 laggardkernel


[license icon]: https://img.shields.io/badge/License-MIT-green.svg
[license]: https://opensource.org/licenses/MIT

[zplugin]: https://github.com/zdharma/zplugin
[turbo mode]: https://github.com/zdharma/zplugin#turbo-mode-zsh--53

[prezto]: https://github.com/sorin-ionescu/prezto
[prezto zcompdump 1]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/completion/init.zsh#L31-L41
[prezto zcompdump 2]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/runcoms/zlogin#L9-L15
[prezto fasd]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/fasd/init.zsh#L22-L36
[prezto *env]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/python/init.zsh#L22
[prezto brew command]: https://github.com/sorin-ionescu/prezto/blob/4abbc5572149baa6a5e7e38393a4b2006f01024f/modules/command-not-found/init.zsh

[omz-thefuck]: https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/thefuck

