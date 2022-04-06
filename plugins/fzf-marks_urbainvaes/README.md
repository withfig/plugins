This plugin can be used to create, delete, and navigate marks in *bash* and *zsh*.
It depends on Junegunn Choi's fuzzy-finder [fzf](https://github.com/junegunn/fzf).

![](https://raw.github.com/uvaes/fuzzy-zsh-marks/demo/demo.gif)

# Usage
The script exposes two functions:

- **mark \<mark\>**, to register a new mark to the current directory;
- **fzm [\<optional-initial-query\>]**, to jump to or delete a mark using `fzf`.

Most of the keybindings in the search window are the default fzf ones.
The only additions are

- **ctrl-y**, to jump to a match;
- **ctrl-t**, to toggle a match for deletion;
- **ctrl-d**, to delete selected matches.

By default, the plugin binds the key `ctrl-g` to `fzm`.

# FAQ

**Question**: *Is it possible to limit the fzf search to the mark label, i.e. to exclude the path from the search?*

Yes, this is possible by passing the options `-n` (for the field number to use for the search) and `-d` (for the delimiter) to `fzf`.
For example, set the `Command` configuration to `fzf --height 40%
--reverse -n 1 -d ' : '`
