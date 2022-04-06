# zsh plugin fzf finder

Shamelessly inspired from [@ael-code][ael] [zsh fasd plugin][0] ;)

A zsh plugin to search in the local tree of subdirectories for files (just
files! No directories nor links).

It is powered by [fzf][1], and supports [bat][2] and [fd][3] (falling back to
`cat` and `find`).

The quick jump functionality is bound on

    - ALT-e to search and feed the result to the `$EDITOR`
    - ALT-r to search and feed the result to the `$PAGER`

but can be overridden by exporting `FZF_FINDER_EDITOR_BINDKEY` and/or
`FZF_FINDER_PAGER_BINDKEY` before sourcing

## Install
### Antigen
```
antigen bundle leophys/zsh-plugin-fzf-finder
```

### zr
```
zr load leophys/zsh-plugin-fzf-finder
```

## Screenshot

![Example](https://github.com/leophys/zsh-plugin-fzf-finder/blob/master/preview.png)

[ael]: https://github.com/ael-code
[0]: https://github.com/ael-code/zsh-plugin-fasd-fzf
[1]: https://github.com/junegunn/fzf
[2]: https://github.com/sharkdp/bat
[3]: https://github.com/sharkdp/fd

