# history-here

An oh-my-zsh plugin that bind's `^G` to quickly toggle the current shell history file location. To use it, add `history-here` to the plugins array in your zshrc file.

```zsh
plugins=(... history-here)
```

The plugin source code needs to be in `~/.oh-my-zsh/plugins/` (either cloned there or symlinked).

## configuration

You can configure automatic isolation of shell history by setting the `HISTORY_HERE_AUTO_DIRS` array. If the current working directory changes to any of the paths in this array (which is lazily matched), history isolation would automatically occur.

```zsh
export $HISTORY_HERE_AUTO_DIRS=(/Users/foo/work /root/work)
```

Note, if you set a small value of something like `pa`, changing to any directory containing `pa` in the path would trigger history isolation.

