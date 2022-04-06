> 256color ZSH Plugin

This ZSH plugin enhances the terminal environment with 256 colors. It looks at
the chosen `TERM` environment variable and sees if there is respective
(n-)curses' termcap/terminfo descriptors for 256 colors available. The result
is a multicolor terminal, if available.

## Debugging

If the environment variable `$ZSH_256COLOR_DEBUG` is set to any value when the
plugin loads, some debugging information is printed to stderr. This is useful
to find out which strategy was successful to set a 256 colors terminal.

