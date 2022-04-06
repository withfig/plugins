# fuzzy-search-and edit

It's a plugin for zsh, which offers widget for fuzzy searching and instantly
opening matched file on matched line.

![fuzzy-search-and-edit](https://cloud.githubusercontent.com/assets/674812/16119705/79da30a2-33fe-11e6-9827-416c961a8b5f.gif)

# Requirements

* [fzf](https://github.com/junegunn/fzf);
* [zsh-async](https://github.com/mafredri/zsh-async);

# Installation

## Via zgen

```fzf
zgen load mafredri/zsh-async
zgen load seletskiy/zsh-fuzzy-search-and-edit
```

## Via zplug

```fzf
zplug "mafredri/zsh-async", from:"github", use:"async.zsh"
zplug "seletskiy/zsh-fuzzy-search-and-edit"
```

# Usage

```fzf
bindkey '^P' fuzzy-search-and-edit
```

# Options

## FZF Options
For a full list of options, see the [fzf](https://github.com/junegunn/fzf) documentation.

To control the default arguments passed to `fzf`, the variable `FZF_DEFAULT_OPTS` should be set and exported.  Key bindings for use within fzf can be specified as part of the command-line arguments.

## Editor invocation

The default editor command uses the global shell `EDITOR` variable for the command of the tool to open, and provides file, line number, and tty to (take over the current prompt) in the format used by vi/vim.

### use-visual
```fzf
zstyle ':fuzzy-search-and-edit:editor' use-visual yes
```
Will use the `VISUAL_EDITOR` variable instead of `EDITOR` if it's set.  Falls back to `EDITOR` if `VISUAL_EDITOR` isn't set.  Will also leave off the `</dev/tty` that only works for in-console editors that take over the prompt.

The equivalent, without the fallback to the `EDITOR` variable, using low-level invocation format specifiers is:

```fzf
# Change the editor invoked
zstyle ':fuzzy-search-and-editor:editor:invocation-format' editor '${VISUAL_EDITOR}'

# leave off the trailing tty injection
zstyle ':fuzzy-search-and-editor:editor:invocation-format' without-tty yes
```

The defalut is `no` if not set.

### alternate-line-syntax
```fzf
zstyle ':fuzzy-search-and-edit:editor' alternate-line-syntax yes
```

A common format for some visual editors (like Sublime Text) is the `"Filename:line"` syntax instead of the default `"+line" "filename"` syntax.  Setting this to `yes` will use the alternate colon-separated format.

The equivalent, using low-level invocation format specifiers is:

```fzf
# don't use the separate line argument to the editor
zstyle ':fuzzy-search-and-editor:editor:invocation-format' line ""

# put the :line at the end of the file, quoting everything together
zstyle ':fuzzy-search-and-editor:editor:invocation-format' file "%F:%L"

# leave off the trailing tty injection
zstyle ':fuzzy-search-and-editor:editor:invocation-format' without-tty yes
```

The default is `no` if not set.

### invocation-format
Low-level format specifiers for how the editor session is invoked from the command-line.  Setting these will override any changes made by other options.

#### editor
```fzf
zstyle ':fuzzy-search-and-edit:editor:invocation-format' editor '${EDITOR}'
```
The format to use for invoking the editor.  This can either be a hardcoded value, or a variable from the shell session.  When using variables, be sure to set it with single-quotes to avoid variable expansion during definition.  The full expansion of the variable is separated on spaces before being evaluated, so extra options can be provided directly or via their own variables.

The default is `${EDITOR}` if not set, or changed with the `use-visual` setting.

#### line
```fzf
zstyle ':fuzzy-search-and-edit:editor:invocation-format' line "+%L"
```
The format to use when specifying the line on the command-line.  The substrings `%L` and `%F` will be replaced using a `zformat -f` command.  If the result is empty, it is excluded from the command-line.  All valid format strings for `zformat -f` are accepted.

The default is `+%L` if not set, or changed with the `alternate-line-syntax` setting.

#### file
```fzf
zstyle ':fuzzy-search-and-edit:editor:invocation-format' file "%F"
```
The format to use when specifying the file on the command-line.  The substrings `%L` and `%F` will be replaced using a `zformat -f` command.  If the result is empty, it is excluded from the command-line. All valid format strings for `zformat -f` are accepted.

The default is `%F` if not set, or changed with the `alternate-line-syntax` setting.

#### without-tty
```fzf
zstyle ':fuzzy-search-and-edit:editor:invocation-format' without-tty yes
```
The `</dev/tty` argument causes problems for editors that don't take over the prompt.  Setting this will exclude it from the invocation.

The default is `no` if not set, or changed with the `use-visual`.

