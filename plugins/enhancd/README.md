## Features

- Go to the visited directory in the past
- Easy to filter, using your favorite filter
- Work on Bash, Zsh and fish (cross-shell compatibility)
- Go back to a specific parent directory like [zsh-bd](https://github.com/Tarrasch/zsh-bd)
- Inside a git repo, the first list element is the git root directory
- Fuzzy search in a similar name directory
- Support standard input (`echo $HOME | cd` is acceptable)
- Custom options (user-defined option is acceptable)

## About 
`cd` command is one of the frequently used commands.

Nevertheless, it is not so easy to handle unfortunately. A directory path given as an argument to `cd` command must be a valid path that exists and is able to resolve. In other words, you cannot pass a partial path such as "dir" (you are in `/home/lisa`, dir is `/home/lisa/work/dir`) to `cd` command.

The new cd command called "enhancd" enhanced the flexibility and usability for a user. enhancd will memorize all directories visited by a user and use it for the pathname resolution. If the log of enhancd have more than one directory path with the same name, enhancd will pass the candidate directories list to the filter within the ENHANCD_FILTER environment variable in order to narrow it down to one directory.

Thanks to this mechanism, the user can intuitively and easily change the directory you want to go.

![](https://raw.githubusercontent.com/b4b4r07/screenshots/master/enhancd/demo.gif)

## Issues

- Fish version
  - Because of how fish piping works, it's not possible to pipe to cd like : `ls / | cd`


### Fuzzy search

You can fuzzy-search a directory name you want to run `cd`. For example, a word "text" is expand to "test" and "txt".

![](https://raw.githubusercontent.com/b4b4r07/screenshots/master/enhancd/fuzzy.gif)

## Requirements

- An interactive filter

  - [**fzy**](https://github.com/jhawthorn/fzy)
  - [**percol**](https://github.com/mooz/percol)
  - [**peco**](https://github.com/peco/peco)
  - [**fzf**](https://github.com/junegunn/fzf)
  - ...

  Choose any one from among these.

 ## Usage

The basic usage of the `cd` command that has been implemented by `enhancd` is the same as the normal builtin `cd` command.

```console
$ cd [-|..] <directory>
```

If no arguments are given, enhancd `cd` command will display a list of the directory you've visited once, encourage you to filter the directory that you want to move.

```console
$ cd
  ...
  /home/lisa/src/github.com/b4b4r07/enhancd/zsh
  /home/lisa/src/github.com/b4b4r07/gotcha
  /home/lisa/src/github.com/b4b4r07/blog/public
  /home/lisa/src/github.com/b4b4r07/blog
  /home/lisa/src/github.com/b4b4r07/link_test
  /home/lisa/src/github.com/b4b4r07
  /home/lisa/Dropbox/etc/dotfiles
  /home/lisa/src/github.com/b4b4r07/enhancd
> /home/lisa
  247/247
> _
```

When enhancd takes a hyphen (`-`) string as an argument, it searchs from the last 10 directory items in the log. With it, you can search easily the directory you used last.

```console
$ cd -
  /home/lisa/Dropbox/etc/dotfiles
  /home/lisa/Dropbox
  /home/lisa/src/github.com
  /home/lisa/src/github.com/b4b4r07/cli
  /home
  /home/lisa/src
  /home/lisa/src/github.com/b4b4r07/enhancd
  /home/lisa/src/github.com/b4b4r07/gotcha
  /home/lisa/src/github.com/b4b4r07
> /home/lisa/src/github.com/b4b4r07/portfolio
  10/10
> _
```

Then, since the current directory will be delete from the candidate, you just press Enter key to return to the previous directory after type `cd -` (`$PWD` is `/home/lisa`, `$OLDPWD` is `/home/lisa/src/github.com/b4b4r07/portfolio`).

From the beginning, `..` means the directory's parent directory, that is, the directory that contains it. When enhancd takes a double-dot (`..`) string as an argument, it behaves like a [zsh-bd](https://github.com/Tarrasch/zsh-bd) plugin. In short, you can jump back to a specific directory, without doing `cd ../../..`.

For example, when you are in `/home/lisa/src/github.com/b4b4r07/enhancd`, type `cd ..` in your terminal:

```console
$ cd ..
  /
  home
  lisa
  src
  github.com
> b4b4r07
  6/6
> _
```

When moving to the parent directory, the current directory is removed from the candidate.

## References

The "visual filter" (interactive filter) is what is called "Interactive Grep Tool" according to [percol](https://github.com/mooz/percol) that is a pioneer in interactive selection to the traditional pipe concept on UNIX.

- **percol** :point_right: [percol adds flavor of interactive selection to the traditional pipe concept on UNIX](https://github.com/mooz/percol)
- **peco** :point_right: [Simplistic interactive filtering tool](https://github.com/peco/peco)
- **fzf** :point_right: [:cherry_blossom: fzf is a blazing fast command-line fuzzy finder written in Go](https://github.com/junegunn/fzf)
- **fzy** :point_right: [:mag: A better fuzzy finder](https://github.com/jhawthorn/fzy)
- **gof** :point_right: [gof - Go Fuzzy](https://github.com/mattn/gof)
- **selecta** :point_right: [Selecta is a fuzzy text selector for files and anything else you need to select](https://github.com/garybernhardt/selecta/)
- **pick** :point_right: [Pick is "just like Selecta, but faster"](https://robots.thoughtbot.com/announcing-pick)
- **icepick** :point_right: [icepick is a reimplementation of Selecta in Rust](https://github.com/felipesere/icepick)
- **sentaku** :point_right: [Utility to make sentaku (selection, 選択(sentaku)) window with shell command](https://github.com/rcmdnk/sentaku)
- **hf** :point_right: [hf is a command line utility to quickly find files and execute a command](https://github.com/hugows/hf)
