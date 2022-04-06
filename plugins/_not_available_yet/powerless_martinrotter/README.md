Tiny &amp; minimalistic/responsive ZSH prompt inspired by powerline.

## What is this stuff?
This is fast and tiny set of ZSH scripts providing some nice ZSH setup, including powerline-inspired prompt and some other enhancements. The prompt offers some nice visual experience and information, including Git repositories metadata.

This is pure ZSH script and should work on any platform supported by ZSH. You do not need anything else like oh-my-zsh and similar shit. Just plain old working ZSH and terminal emulator with support of 255 colors. Tested on Linux (Terminix) and on Cygwin (mintty). So what exactly you need is:

* ZSH,
* terminal emulator.

**You do not need anything else, like powerline-enabled font. This prompt does NOT use special "powerline" characters, nor special UTF-8 characters. It relies on ASCII characters where possible. The prompt uses standard 8/16 colors, so that your terminal emulator color themes will work.**

## What does the prompt show?
This is simple prompt which shows:

* current username (and hostname **if connected via SSH**),
* working directory,
* result code of previous command (**if differs from 0**),
* support for 8/16 colors or hardcoded custom colors (**switchable via script parameter**),
* current Git branch (**if any**) and indication of dirty state,
* some specific situations are shown with special color (like error in previous command or root prompt).

## `utilities` script
There is additional `utilities.zsh` script which offers some extra goodies:

* custom keyboard bindings:
    * `Ctrl+Left/Right` - move cursor one word left/right,
    * `Home/End` - go to beginning/end of line,
    * `Ctrl+Backspace/Delete` - delete whole word left/right from cursor,
    * `Ctrl+Up/Down` - complete command line with previous/next matching item from history.
* ignore duplicates in history,
* allow folders to be browsed without `cd`,
* new command `s`, which swaps two most recent directories on top of dirstack,
* persistent directory stack tweaks (**switchable via script parameter**),
* simple & quite fast setup for completions.    
    
## Installation
1. Clone this repo into standalone folder: `git clone https://github.com/martinrotter/powerless.git powerless`.
2. Add this to your `.zshrc`:
```bash
# NOTE THAT these two scripts must be called with parameters.

source /path/to/powerless/powerless.zsh false # Script with prompt, disable hardcoded colors.
source /path/to/powerless/utilities.zsh true  # Optional scripts (see above), enable dirstack tweaks.
```
