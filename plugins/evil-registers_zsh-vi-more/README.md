# Zsh Evil Registers

[![Gitter](https://badges.gitter.im/zsh-vi-more/community.svg)](https://gitter.im/zsh-vi-more/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Matrix](https://img.shields.io/matrix/zsh-vi-more_community:gitter.im)](https://matrix.to/#/#zsh-vi-more_community:gitter.im)

Access external clipboards in vi-mode keymaps,
and synchronize registers to your favorite editors.

If you have a supported clipboard program, simply use your familiar vim bindings:
- `"+` to specify the clipboard selection
- `"*` to specify the primary selection (the same as `"+` in some cases)

If you have a clipboard which is not supported,
_but_ there is a program which can set the clipboard from `stdin`,
and a program which can print the contents of the clipboard on `stdout`,
you can set the appropriate handlers like so:
```zsh
zstyle :zle:evil-registers:'+' yank clipboard-program --read-from-stdin
zstyle :zle:evil-registers:'+' put  clipboard-program --print-to-stdout
```

Then send us a pull request or report an issue!
We'd love to support more clipboards.

## Workflow Examples

- Yank a word to the system clipboard with `"+yaw`
- Paste from the system primary selection (if supported) with `"*p`
- If `zstyle :zle:evil-registers:'[A-Za-z]' editor $your_editor` is set with a supported editor:
  - Delete the current line to your editor's register `a`: `"add`
  - Append the text [within quotes](https://github.com/zsh-vi-more/vi-motions) to your editor's register `q`: `"Qyi"`
  - Put the text from your editor's register `r` before your cursor: `"rP`

See a demo [here](https://asciinema.org/a/q0N73xBvkYDBhBjR8DmD5F78w)!

## Insert Mode `<Ctrl-R>[reg]` mapping

You can enable Vim-style Ctrl-r inserting by setting the following style _before_ sourcing this plugin:

```zsh
zstyle :zle:evil-registers ctrl-r true
```

Keep in mind that
[other plugins](https://github.com/junegunn/fzf/blob/1a191ec6f75acd1a0c89d28745a4b7cdf047875a/shell/key-bindings.zsh#L109)
may bind to 
`^R`, so alternatively you can manually bind the function after sourcing all your plugins:

```zsh
bindkey -M viins '^r' →evil-registers::ctrl-r
```

## Supported interfaces

#### System Clipboards

The following programs are used to set the system clipboard(s)
with registers `+` and `*`.

- xclip
- xsel
- wl-clipboard
- termux-clipboard (Android has no "selection", so both `+` and `*` operate on the same clipboard)

#### Editor Register Sync

Synchronization of the alphabetic registers is supported with these editors:

- Neovim (requires `nvr`)
- Vim (requires +clientserver support)

Example:

```zsh
zstyle :zle:evil-registers:'[A-Za-z%#]' editor nvim
```

The function which pulls the registers from Neovim and Vim
have special behavior for `"%` and `"#`,
as they substitute the full path instead.

### Last Insert Register `.`:

The last insert register should work by default.
It uses the global parameters `$__last_insert`,
`$_old_CURSOR`,
and `$_old_KEYMAP`.

### Custom Registers:

If you have a clipboard (or any other function which you want to act as one),
you can register it by adding the appropriate `zstyle`:

```zsh
# Here, $p is either a keystroke or a pattern which matches a keystroke
zstyle :zle:evil-registers:$p yank - your-command --with --args
zstyle :zle:evil-registers:$p put  - your-command --with --args

# The first argument to a style is a set of flags
# -v: Don't run a program, treat the handler as a parameter name
# -a: Add the register name to the handler's args
# -p: (yank-only): Add the yanked text to the handler's args
# -r:  (put-only): The function will assign the text to the REPLY parameter

# With this style, "byy will run `your-command --which-expects-register b "$yanked_line"`
zstyle :zle:evil-registers:'[abc]' yank -ap your-command --which-expects-register

# With this style, "bp will run `your-command --which-expects-register b`
# your-command should print to stdout the text to put
zstyle :zle:evil-registers:'[abc]' put -a  your-command --which-expects-register

# With this style, "bp will run `your-function --which-expects-register b`
# your-function should set the $REPLY parameter to the text to put
zstyle :zle:evil-registers:'[abc]' put -ar your-function --which-expects-register
your-function(){
	do-something
	REPLY=$whatever
}

# The following style will substitute the current value of the variable passed:
zstyle :zle:evil-registers:$p put -v VAR_NAME
zstyle :zle:evil-registers:$p put -v 'array[key]'
```

If you define a function on a normal-use register (examples: `a`, `T`, `3`),
then it will *override* its normal functionality, including the synchronization offered by this plugin.
As an example, a simple one-directional append-to-text-file board can be implemented:

```zsh
zstyle :zle:evil-registers:/ yank eval ">> $HOME/.scraps"
```
Now you can append to `~/.scraps` with `"/y<vi-motion>`.

### Unnamed Register

To set a handler for the unnamed register,
use an empty pattern:
```zsh
zstyle :zle:evil-registers:'' $operation $handler
```

Example: To get the same result as Vim's `set unnamedplus`,
add this after you source this plugin:

```zsh
(){
	local op
	local -a handler
	for op in yank put; do
		# get the current behavior for '+'
		zstyle -a :zle:evil-registers:'+' $op handler
		# if there is a handler, assign it for the empty pattern
		(($#handler)) && zstyle :zle:evil-registers:'' $op $handler
	done
}
```

## Installation

**Antigen**:
```zsh
antigen bundle zsh-vi-more/evil-registers
antigen apply
```

**Zgen**:
```zsh
zgen load zsh-vi-more/evil-registers
zgen save
```


**Zplug**:
```zsh
zplug zsh-vi-more/evil-registers
```

**Zplugin**:
```zsh
zplugin ice wait "0"
zplugin light zsh-vi-more/evil-registers

# Optionally, track the latest development version:
zplugin ice wait "0" ver"dev"
zplugin light zsh-vi-more/evil-registers
```

**Manually**: Clone the project, and then source it:
```zsh
source /path/to/evil-registers/evil-registers.zsh
```

## Similar Projects

- [kutsan/zsh-system-clipboard](https://github.com/kutsan/zsh-system-clipboard)

