Tmux Session Manager
====================

Installation
------------

### [Zplugin](https://github.com/zdharma/zplugin)

```sh
zplugin light "RobertAudi/tsm"
```

### [zplug](https://github.com/zplug/zplug)

```sh
zplug "RobertAudi/tsm"
```

### [zgen](https://github.com/tarjoilija/zgen)

```sh
zgen load RobertAudi/tsm
```

### [Antigen](http://antigen.sharats.me/)

```sh
antigen bundle RobertAudi/tsm
```

### As a plugin

```console
$ source "tsm.plugin.zsh"
```

### Manually

For a "stable" version:

- Put `dist/bin/tsm` in a directory in your `$PATH`
- Put `dist/functions/_tsm` in a directory in your `$FPATH` (optional)

For the latest version:

- Run `make`
- Put `build/tsm` in a directory in your `$PATH`
- Put `share/zsh/_tsm` in a directory in your `$FPATH` (optional)

Requirements
------------

- `tmux` (Tested versions: **2.3**)
- `zsh` (Tested versions: **5.2**, **5.3**)
- 256 colors support
- \*nix (Tested OS: macOS Sierra **10.12**)

Usage
-----

```console
$ tsm <command> [args...]
```

Configuration
-------------

- `$TSM_HOME` (**default:** `$XDG_DATA_HOME/tsm`)
- `$TSM_SESSIONS_DIR` (**default:** `$TSM_HOME/sessions`)
- `$TSM_BACKUPS_DIR` (**default:** `$TSM_HOME/backups`)
- `$TSM_DEFAULT_SESSION_FILE` (**default:** `$TSM_HOME/default-session.txt`)
- `$TSM_BACKUPS_COUNT` (**default:** `20`)

_**Note:** If_ `$XDG_DATA_HOME` _is not set **and** the_ `$TSM_HOME` _environment variable was not customized,_ `$HOME/.local/share` _will be used as fallback._

Commands
--------

- [x] `list`
- [x] `show`
- [x] `save`
- [x] `restore`
- [x] `resume`
- [x] `quit`
- [ ] `backup`
- [ ] `cleanup`
- [x] `help`
- [x] `version`
- [ ] `edit`
- [x] `remove`
- [x] `copy`
- [x] `duplicate`
- [x] `rename`
- [ ] `migrate`
- [ ] `env`

TODO
----

- [ ] Man pages
- [ ] Configuration file
- [x] ASCII Art logo

Credits
-------

- [`tmux-session`][tmux-session-mislav] by [Mislav Marohnić][gh-mislav] ([@mislav][gh-mislav]) was used as a starting point for this project.
- Lots of inspiration from [zplug][gh-zplug].

[tmux-session-mislav]: https://github.com/mislav/dotfiles/blob/62ca947b2cc39453a9f06d601dc00f85708995d9/bin/tmux-session
[gh-mislav]: https://github.com/mislav
[gh-zplug]: https://github.com/zplug/zplug

License
-------

[MIT](LICENSE.txt)

