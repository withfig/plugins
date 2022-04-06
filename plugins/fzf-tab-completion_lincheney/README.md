Tab completion using fzf in zsh, bash, GNU readline apps (e.g. `python`, `php -a` etc.)

This is distinct from
[fzf's own implementation for completion](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh),
in that it works _with_ the existing completion mechanisms
rather than [creating a new mechanism](https://github.com/junegunn/fzf/wiki/Examples-(completion)).

## Installation

1. You need to [install fzf](https://github.com/junegunn/fzf#installation) first.
1. On OSX, you also need to GNU awk, e.g. `brew install gawk`
1. Follow instructions on how to set up for:
    * [zsh](#zsh)
    * [bash](#bash)
1. The following environment variables are supported, just as in fzf's "vanilla" completion.
    * `$FZF_TMUX_HEIGHT`
    * `$FZF_COMPLETION_OPTS`
    * `$FZF_DEFAULT_OPTS`

    See also <https://github.com/junegunn/fzf#settings>

    Avoid changing these `fzf` flags: `-n`, `--nth`, `--with-nth`, `-d`

## zsh

Note that this does not provide `**`-style triggers,
you will need to enable fzf's zsh completion _as well_.

#### tmux

`$FZF_TMUX_OPTS` is respected same as in [fzf](https://github.com/junegunn/fzf#key-bindings-for-command-line)
however you must have fzf's keybindings enabled as well.

#### Searching display strings

By default, display strings are shown but cannot be searched in fzf.
This is configurable via `zstyle`:
```bash
# only for git
zstyle ':completion:*:*:git:*' fzf-search-display true
# or for everything
zstyle ':completion:*' fzf-search-display true
```

#### Specifying custom fzf options

You can specify custom `fzf` options with the `fzf-completion-opts` style.
This allows you to have different options based on the command being completed
(as opposed to the `$FZF_DEFAULT_OPTS` etc environment variables which are global).

This is most useful for changing the `--preview` option.
Use `{1}` for the selected text (or `{+1}` if using multi-select).
Note `{1}` or `{+1}` will come through "shell-escaped", so you will need to unescape it, e.g. using `eval` or `printf %b`

```bash
# basic file preview for ls (you can replace with something more sophisticated than head)
zstyle ':completion::*:ls::*' fzf-completion-opts --preview='eval head {1}'

# preview when completing env vars (note: only works for exported variables)
# eval twice, first to unescape the string, second to expand the $variable
zstyle ':completion::*:(-command-|-parameter-|-brace-parameter-|export|unset|expand):*' fzf-completion-opts --preview='eval eval echo {1}'

# preview a `git status` when completing git add
zstyle ':completion::*:git::git,add,*' fzf-completion-opts --preview='git -c color.status=always status --short'

# if other subcommand to git is given, show a git diff or git log
zstyle ':completion::*:git::*,[a-z]*' fzf-completion-opts --preview='
eval set -- {+1}
for arg in "$@"; do
    { git diff --color=always -- "$arg" | git log --color=always "$arg" } 2>/dev/null
done'
```

#### tmux

`$FZF_TMUX_OPTS` is respected same as in [fzf](https://github.com/junegunn/fzf#key-bindings-for-command-line)
however you must have fzf's keybindings enabled as well.

#### Custom loading message

`bash` clears the prompt and input line before running the completion,
so a loading message is printed instead.

You can customise the message by overriding the `_fzf_bash_completion_loading_msg()` function.

For example the following "re-prints" the prompt and input line
to make this less jarring
(note this may or may not work, there's no detection of `$PS2` and there is always some unavoidable flicker):
```bash
_fzf_bash_completion_loading_msg() { echo "${PS1@P}${READLINE_LINE}" | tail -n1; }
```

## Related projects

* <https://github.com/rockandska/fzf-obc> (fzf tab completion in bash)
* <https://github.com/Aloxaf/fzf-tab> (fzf tab completion in zsh)
* <https://github.com/lincheney/rl_custom_isearch> (fzf for history search in all readline applications)
