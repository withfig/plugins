Utility tool for using git interactively. Powered by
[junegunn/fzf]("https://github.com/junegunn/fzf").

This tool is designed to help you use git more efficiently.
It's **lightweight** and **easy to use**.

**Note:** *Requires [`fzf`](https://github.com/junegunn/fzf). Make sure
you have it installed.*

### 📝 Features

- **Interactive `git add` selector** (`ga`)

![screenshot](https://raw.githubusercontent.com/wfxr/i/master/forgit-ga.png)

- **Interactive `git log` viewer** (`glo`)

![screenshot](https://raw.githubusercontent.com/wfxr/i/master/forgit-glo.png)

*The log graph can be disabled by option `FORGIT_LOG_GRAPH_ENABLE` (see discuss in [issue #71](https://github.com/wfxr/forgit/issues/71)).*

- **Interactive `.gitignore` generator** (`gi`)

![screenshot](https://raw.githubusercontent.com/wfxr/i/master/forgit-gi.png)

- **Interactive `git diff` viewer** (`gd`)

- **Interactive `git reset HEAD <file>` selector** (`grh`)

- **Interactive `git checkout <file>` selector** (`gcf`)

- **Interactive `git checkout <branch>` selector** (`gcb`)

- **Interactive `git checkout <tag>` selector** (`gct`)

- **Interactive `git checkout <commit>` selector** (`gco`)

- **Interactive `git revert <commit>` selector** (`grc`)

- **Interactive `git stash` viewer** (`gss`)

- **Interactive `git clean` selector** (`gclean`)

- **Interactive `git cherry-pick` selector** (`gcp`)

- **Interactive `git rebase -i` selector** (`grb`)

- **Interactive `git commit --fixup && git rebase -i --autosquash` selector** (`gfu`)

#### git

Fig will automatically configure `forgit` for use as a git alias as well.
So you can do, e.g.

```
$ git forgit log
$ git forgit add
$ git forgit diff
```

### 💡 Tips

- Most of the commands accept optional arguments (eg, `glo develop`, `glo f738479..188a849b -- main.go`, `gco master`).
- `gd` supports specifying revision(eg, `gd HEAD~`, `gd v1.0 README.md`).
- Call `gi` with arguments to get the wanted `.gitignore` contents directly(eg, `gi cmake c++`).
- You can use the commands as sub-commands of `git`, see [#147](https://github.com/wfxr/forgit/issues/147) for details.

### ⌨  Keybinds

| Key                                           | Action                    |
| :-------------------------------------------: | ------------------------- |
| <kbd>Enter</kbd>                              | Confirm                   |
| <kbd>Tab</kbd>                                | Toggle mark and move up   |
| <kbd>Shift</kbd> - <kbd>Tab</kbd>             | Toggle mark and move down |
| <kbd>?</kbd>                                  | Toggle preview window     |
| <kbd>Alt</kbd> - <kbd>W</kbd>                 | Toggle preview wrap       |
| <kbd>Ctrl</kbd> - <kbd>S</kbd>                | Toggle sort               |
| <kbd>Ctrl</kbd> - <kbd>R</kbd>                | Toggle selection          |
| <kbd>Ctrl</kbd> - <kbd>Y</kbd>                | Copy commit hash*         |
| <kbd>Ctrl</kbd> - <kbd>K</kbd> / <kbd>P</kbd> | Selection move up         |
| <kbd>Ctrl</kbd> - <kbd>J</kbd> / <kbd>N</kbd> | Selection move down       |
| <kbd>Alt</kbd> - <kbd>K</kbd> / <kbd>P</kbd>  | Preview move up           |
| <kbd>Alt</kbd> - <kbd>J</kbd> / <kbd>N</kbd>  | Preview move down         |

\* Available when the selection contains a commit hash.
For linux users `FORGIT_COPY_CMD` should be set to make copy work. Example: `FORGIT_COPY_CMD='xclip -selection clipboard'`.
