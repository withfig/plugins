vimman - View vim plugin manuals (help) like man in zsh
==========================

vimehelp makes opening the vim help quickly in zsh.

![animation01](https://raw.github.com/yonchu/vimman/master/img/animation01.gif)

![Screenshot02](https://raw.github.com/yonchu/vimman/master/img/screenshot02.png)


## Installation

Clone `vimman` from github.

```console
$ git clone https://github.com/yonchu/vimman.git
```

Source `vimman/vimman.zsh` in your `.zshrc` and restart zsh.

```zsh
source /path/to/vimman/vimman.zsh
```

## Usage

```
Usage:

  $ vimman [-e] <help-file>

Options:
  -e : Edit the vim plugin help (not use :help command)
```

If you want to use the cache, set the followings in your .zshrc:

```zsh
zstyle ':completion:*' use-cache yes
```

## Customizing

Custom plugin directories (besides default `~/.vim/doc`):

```zsh
zstyle ':vimman:' dir ~/.vim/bundle ~/hoge
```

Display verbose (print the path to the help file):

```zsh
zstyle ':vimman:' verbose yes
```

Cache expiration days (default: 1):

```zsh
zstyle ':vimman:' expire 7
```

Note that if you change the zstyle settings,
you should delete the cache file and restart zsh.

```console
$ rm ~/.zcompcache/vimman
$ exec zsh
```

## License

MIT License

## Copyright

Copyright (c) 2013 Yonchu.

## See also

Japanese manual:


