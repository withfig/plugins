Per-directory history for zsh.

## Overview

zsh-directory-history is a zsh plugin giving you a history which is sensitive to the directory you are in.
It implements forward/backward navigation as well as substring search in a directory sensitive manner.
Since zsh-directory-history includes [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search), do not load zsh-history-substring-search when loading this plugin.

Behavior:
* Commands executed in the current directory will pop up first when navigating the history or using substring search.
* A substring unknown in the current directory, will be searched for globally (it falls back to the normal substring search behavior).

Since the plugin creates its own history (in `~/.directory_history`), it needs some time to fill up and become useful.

You can configure keys for navigating through history and searching over
history in the configuration tab.
