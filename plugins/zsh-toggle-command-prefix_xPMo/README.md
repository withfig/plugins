# Toggle Command Prefix

_A Zsh widget to toggle a prefix on a command_

By default, this will set "Alt+s" to toggle `sudo ` on a command.

In its current state, it uses `split-shell-arguments`
to divide up the buffer, and looks for newlines,
`;`/`&&`/`||`/`|`,
followed optionally by `if`/`else`/`while`/etc.

This method should avoid any false positives,
but it will also ignore `$(command substitutions)`.

This project also makes use of all `sudo` flags
known by the completion function `_sudo`
and deletes them and their arguments if found as well.
For example,
`sudo -uuser -g group --shell foo bar` will be replaced by
`foo bar`, since `-u` and `-g` take arguments,
while `--shell` does not.

## Default widgets:

|Widget | Binding | Prefix Inserted | Prefix Matched |
| --- | --- | --- | --- |
| `toggle-sudo` | Alt-s | `sudo ` | `sudo` followed by any number of supported flags known by `_sudo` completion |
| `toggle-noglob` | Alt-g | `noglob ` | `noglob` |
| `toggle-nocorrect` | _(not bound)_| `nocorrect ` | `nocorrect` |
| `toggle-command` | Alt-Shift-c | `command ` | `command` |

## Examples:

Launch a command with `i3-msg` instead of in the current session.

```zsh
.toggle-i3exec(){
	.toggle-command-prefix 'i3-msg -- exec -- ' 'i3-msg' '(--|exec)'
}
zle -N .toggle-i3exec
bindkey '^[i' .toggle-i3exec
```

Launch a command with `nice`

```zsh
.toggle-nice(){
	.toggle-command-prefix 'nice -n10 ' 'nice' '(-n?|--adjustment=)*' '(-n|--adjustment)'
}
zle -N .toggle-nice
bindkey '^[n' .toggle-nice
```

## Configuration

Toggle-command-prefix uses `zstyle` settings to control certain behavior.

### CUTBUFFER

If a command is found and removed, the following lookup is done:

```zsh
zstyle -t :zle:toggle-command-prefix:${removed_text} copy
```

If the lookup returns true,
then the remove text is also yanked into the cut buffer for later pasting.

You can use this like so:

```zsh
# copy by default
zstyle ':zle:toggle-command-prefix:*' copy true
# don't copy sudo by itself
zstyle ':zle:toggle-command-prefix:sudo ' copy false
# copy sudo followed by any number of other matched flags
zstyle ':zle:toggle-command-prefix:sudo -*' copy true
```

