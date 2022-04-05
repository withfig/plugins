fzf+fasd
========

A shell plugin that integrates [fzf] and [fasd] --- tab completion of `z` with fzf's fuzzy search!

Currently supports zsh only (TODO: bash), and the `z` command (TODO: `d,` and `f,`)


Usage
-----

```
z [dir name slug]<TAB>
```

### Configuration

To configure fzf height or [any other options](https://github.com/junegunn/fzf#environment-variables) passed to fzf, tune `FZF_TMUX_HEIGHT` or `FZF_DEFAULT_OPTS` for all fzf widgets (e.g. CTRL-T), or `FZF_FASD_OPTS` for fzf-fasd only.
For example:
```bash
export FZF_TMUX_HEIGHT='40%'    # default height is 40%
export FZF_DEFAULT_OPTS='--height 80%'
export FZF_FASD_OPTS='--prompt "fasd_cd> "'
```

Installation
------------

Make sure that you have [fzf] and [fasd] installed.

[zplug]:

```
zplug "wookayin/fzf-fasd"
```

or use your favorite plugin manager.


See Also
--------

- [fz], which inspired this plugin.


License
-------

[MIT License](LICENSE) (c) 2017-2020 Jongwook Choi


[fzf]: https://github.com/junegunn/fzf
[fasd]: https://github.com/clvv/fasd
[zplug]: https://github.com/zplug/zplug
[fz]: https://github.com/changyuheng/fz

