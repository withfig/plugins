zsh-fzy is a [zsh](http://www.zsh.org/) plugin that uses [fzy](https://github.com/jhawthorn/fzy) for 
certain fuzzy matching operations. The plugin defines the following Zle
widgets:

- `fzy-file-widget`: Starts recursive file selection, and inserts the chosen
  file paths in the command line.

- `fzy-cd-widget`: Starts subdirectory selection, and changes to the chosen
  directory with `cd`.

- `fzy-history-widget`: Starts command history selection, using the existing
  input (if any) as initial search query, and replaces the command line with
  the chosen one.

- `fzy-proc-widget`: Starts processes selection, and inserts the chosen
  process ID in the command line.


## Prerequisites
* [fzy](https://github.com/jhawthorn/fzy)



## Configuration

By default the widgets defined by the plugin are *not* bound. A typical
configuration could be:

```sh
# ALT-C: cd into the selected directory
# CTRL-T: Place the selected file path in the command line
# CTRL-R: Place the selected command from history in the command line
# CTRL-P: Place the selected process ID in the command line
bindkey '\ec' fzy-cd-widget
bindkey '^T'  fzy-file-widget
bindkey '^R'  fzy-history-widget
bindkey '^P'  fzy-proc-widget
```

Additional configuration is done using Zsh styles. The following lists the
available styles and their defaults:

```sh
zstyle :fzy:tmux    enabled      no

zstyle :fzy:history show-scores  no
zstyle :fzy:history lines        ''
zstyle :fzy:history prompt       'history >> '
zstyle :fzy:history command      fzy-history-default-command

zstyle :fzy:file    show-scores  no
zstyle :fzy:file    lines        ''
zstyle :fzy:file    prompt       'file >> '
zstyle :fzy:file    command      fzy-file-default-command

zstyle :fzy:cd      show-scores  no
zstyle :fzy:cd      lines        ''
zstyle :fzy:cd      prompt       'cd >> '
zstyle :fzy:cd      command      fzy-cd-default-command

zstyle :fzy:proc    show-scores  no
zstyle :fzy:proc    lines        ''
zstyle :fzy:proc    prompt       'proc >> '
zstyle :fzy:proc    command      fzy-proc-default-command
```

Setting `:fzy:tmux enabled` will use a split pane when the shell is running
inside [Tmux](https://github.com/tmux/tmux). Currently there are no options
to allow configuration of the Tmux pane used for the widgets. Contributions
to address this are very welcome, as well as day-to-day testing with this
option enabled.

For each widget, the `:fzy:${widget}` context contains the following options:

- `show-scores`: Whether to let `fzy` show the matching scores for each entry.
- `lines`: The number of lines of the screen to use for the list of candidate
  matches. If undefined, `fzy`'s default is used. A value can be prefixes with
  `min:`, which will cause `fzy` to use at least a certain amount of lines,
  plus any additional lines which may be available below until the last row
  of the terminal (note that this needs an [ECMA-48](https://en.wikipedia.org/wiki/ECMA-48)-capable
  terminal (most are).
- `prompt`: The prompt shown before the user input.
- `command`: The command executed to generate the list of candidates for
  selection.


### Commands

Commands used to generate lists of candidate entries for completoin must
write items to standard output, one per line. Commands
`fzy-file-default-command`, `fzy-cd-default-command`, and
`fzy-history-default-command` are used by default. The first two use `find(1)`
under the hood, and you may prefer to use other tools like
[RipGrep](https://github.com/BurntSushi/ripgrep) to produce the list of
candidate elements shown by the widgets:

```sh
zstyle :fzy:file command rg --files
```

Note that the `command` settings are arrays, please take it into account
when specifying them:

```sh
zstyle :fzy:file command rg --files    # Correct. Array of two elements.
zstyle :fzy:file command 'rg --files'  # Incorrect. Array of one element.
```

