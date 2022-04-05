# zsh-notes

zsh-notes is a [zsh](http://www.zsh.org/) plugin inspired by
[terminal_velocity](https:/A/www.seanh.cc/terminal_velocity/). It provides a
fast interface to create and access a set of
[Markdown](https://en.wikipedia.org/wiki/Markdown) text files inside a
directory.

- [fzf](https://github.com/junegunn/fzf) is used for locating files. It
  will be searched in `${PATH}`.
- `${EDITOR}` is launched to view and edit files. Like most tools do,
  `${VISUAL}` will be tried as well, with `vi` as last fallback.

The plugin defines one Zle widgets:

- `notes-edit-widget`: Opens the file selector, and invokes the text
  editor on the selected file or creates a new one. The input buffer is
  left untouched.

the following functions:

- `notes-home`: Prints the directory where Markdown file are stored.
- `notes-list-files`: Prints a list of absolute paths to all the files
  contained in the directory returned by `notes-home`.
- `notes-list`: Prints a list of names (sans the `.md` suffix) for all
  the files listed by `notes-list-files`, with the prefix directory
  returned by `notes-home` removed.
- `notes-pick-fzf`: Opens a file selector, and prints the chosen item
  to standard output.

In the file selector, the usual `fzf` key bindings apply, plus the following
additional ones:

- `Ctrl-N`: Creates a new file named after the query string, regardless
  of whether it matches files or not.

- `Tab`: Toggle the preview panel.


## Installation

The plugin can be installed manually by obtaining a copy and sourcing it.
It is recommended to use a plugin manager, e.g. when using
[zplug](https://github.com/zplug/zplug):

```sh
zplug aperezdc/zsh-notes
```


## Configuration

By default the widgets defined by the plugin are not bound. A typical
configuration could be:

```sh
# Ctrl-N: Open the notes selector.
bindkey '^N' notes-edit-widget
```

Additional configuration is done using Zsh styles. The following lists
the available styles and their defaults:

```sh
# If unset, ~/Notes is used as default.
zstyle :notes home  ''

# When set, exits the notes widget after one use.
zstyle :notes:widget once no

# Choose the picker used by the widget. Supported values: fzf, skim, fzy.
zstyle :notes:widget picker fzf
```

When using `fzf` or `skim` it's possible to show a side panel with a preview
of the notes. The `cat` command is used by default, but any program that can
render Markdown to ANSI terminal escapes should do (for example
[mdcat](https://github.com/lunaryorn/mdcat) and
[lowdown](https://kristaps.bsd.lv/lowdown/) are known to work well):

```sh
# Enable preview panel. Disabled by default.
zstyle :notes:widget:preview enabled yes

# The default is "cat", but can be any command that renders to ANSI escapes:
zstyle :notes:widget:preview command lowdown -Tterm

# Alternative using mdcat:
zstyle :notes:widget:preview command mdcat -l
```

