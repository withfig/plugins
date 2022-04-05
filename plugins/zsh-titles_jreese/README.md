# zsh-titles

Automatic terminal and tmux titles based on current location and task.

Terminal window titles will include information about your current tmux
session, while your tmux windows will be named based on your current directory
and the command being run.  See the following screenshot for examples of both:

![screenshot](https://raw.githubusercontent.com/jreese/zsh-titles/master/screenshot.png)

Note: Since tmux v2.7, the option that allows tmux windows to be automatically rename was turned off by default. To turn it on, add

    set -g allow-rename on

to your `.tmux.conf`.

## copyright

zsh-titles is copyright 2015 John Reese, and licensed under the MIT license.

