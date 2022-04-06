# zsh colored man pages
zsh plugin that colorifies man pages.

It simply provides a `man` wrapper function that shows colored manpages.


### Installation 
#### Antigen
Add this to your `.zshrc`:
```
antigen bundle ael-code/zsh-colored-man-pages
```

#### From source
You can also load the `man` wrapper function by loading the `colored-man-pages.plugin.zsh` file directly:
```
source colored-man-pages.plugin.zsh && man less
```

### Rationale
The wrapper function uses the `LESS_TERMCAP_*` environment variables to set the ASNI escape sequences that `less` uses to print special strings (bold, underline, reversed, etc.. ).

ANSI escape sequences are retrieved from the terminfo database through the `tput` command.

