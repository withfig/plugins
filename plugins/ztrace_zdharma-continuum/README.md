## ztrace [![Gitter][gitter-image]][gitter-link]

`Ztrace` plugin allows to catch output of commands in background.
By issuing:

```zsh
ztstart 3
```

We inform `Ztrace` to catch output of `3` commands.

Video: https://asciinema.org/a/45530

[![asciicast](https://asciinema.org/a/45530.png)](https://asciinema.org/a/45530)

## Installation

### [zinit](https://github.com/zdharma-continuum/zinit)

Add `zinit load zdharma-continuum/ztrace` to your `.zshrc` file. zinit will handle
cloning the plugin for you automatically the next time you start zsh.

### [Antigen](https://github.com/zsh-users/antigen)

Adding `antigen bundle zdharma-continuum/ztrace` to your .zshrc file. Antigen will handle cloning the plugin for you automatically the next time you start zsh. You can also add the plugin to a running zsh with `antigen bundle psprint/ztrace` for testing before adding it to your `.zshrc`.

### [Oh-My-Zsh](http://ohmyz.sh/)

1. `cd ~/.oh-my-zsh/custom/plugins`
2. `git clone git@github.com:zdharma-continuum/ztrace.git`
3. Add zsnapshot to your plugin list

### [Zgenom](https://github.com/jandamm/zgenom)

Add `zgenom load zdharma-continuum/ztrace` to your .zshrc file in the same function you're doing your other `zgen load` calls in.

## More information

Below are keyboard shortcuts used by `ztrace` command:

- `Ctrl-T` - start Zsh Command Architect (Zshell binding)
- `Ctrl-E` - switch between Ztrace and History views
- `Enter` - delete selected segment (when in command window) or add selected segment (when in history window)
- `[` or `]` - move active segment (when in command window)
- `Shift-left` or `Shift-right` - move active segment (when in command window)
- `Tab` - switch between the two available windows
- `g, G` - beginning and end of the list
- `/` - start incremental search
- `Esc` - exit incremental search, clearing filter
- `<`,`>`, `{`,`}` - horizontal scroll
- `Ctrl-L` - redraw of whole display
- `Ctrl-O`, `o` - enter uniq mode (no duplicate lines)
- `Ctrl-W` (in incremental search) - delete whole word
- `Ctrl-K` (in incremental search) - delete whole line
- `Ctrl-D`, `Ctrl-U` - half page up or down
- `Ctrl-P`, `Ctrl-N` - previous and next (also done with vim's j,k)

[gitter-image]: https://badges.gitter.im/zdharma-continuum/community.svg
[gitter-link]: https://gitter.im/zdharma-continuum/community

