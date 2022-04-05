# zsh-viexchange

zsh plugin similar to vim-exchange plugin at [https://github.com/tommcdo/vim-exchange]

This allows you to easily swap text between two places in the buffer.

Usage is:

- **cx&lt;motion&gt;** to select some text and then repeat to select text that it should be exchanged with
- **cxc** to clear the selection
- **cxx** to select the current line
- **X** in visual mode to use the visual selection for an exchange
- **.** (dot) to repeat the same motion

To configure the colours used for the text that is to be exchanged, use
zstyle. The default is:

    zstyle 'zle:exchange' highlight 'fg=26,bg=195'

