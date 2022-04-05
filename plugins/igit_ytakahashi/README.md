# igit

`igit` - interactive git command using fzf

![igit](https://user-images.githubusercontent.com/26239560/45913024-20246d80-be66-11e8-904c-63bad327e1ce.gif)

## Requirements

- zsh
- [fzf](https://github.com/junegunn/fzf)

## Install

### With [zinit](https://github.com/zdharma-continuum/zinit)

```zsh
zinit light ytakahashi/igit

# or
# zinit load ytakahashi/igit
```

### With [zplug](https://github.com/zplug/zplug) :hibiscus:

```zsh
zplug "ytakahashi/igit"
```

### Manually

Clone this repository and load `igit.plugin.zsh` from `.zshrc`

```.zshrc
source /path/to/igit.plugin.zsh
```

## Usage

```shell
igit [command]
```

command: `add`, `branch`, `cherry-pick`, `delete`, `diff`, `log`, `merge`, `stash`, `switch`, `tag`, `revert`

### Basic usage

Basic operation on fzf window.  

| Key                                                         | Description            |
| :---------------------------------------------------------- | :--------------------- |
| <kbd>Ctrl</kbd>+<kbd>j</kbd>/<kbd>n</kbd>                   | Move cursor down       |
| <kbd>Ctrl</kbd>+<kbd>k</kbd>/<kbd>p</kbd>                   | Move cursor up         |
| <kbd>Ctrl</kbd>+<kbd>c</kbd>/<kbd>g</kbd> or <kbd>Esc</kbd> | Exit                   |

`igit` specific operation on fzf window.

| Key                           | Description                                                                     |
| :---------------------------- | :------------------------------------------------------------------------------ |
| <kbd>Ctrl</kbd>+<kbd>s</kbd>  | See selected file/branch/commit                                                 |
| <kbd>Alt</kbd>+ `key`         | Put git command using selected file/branch/commit onto the editing buffer stack |

### igit help

Show available commands.

### igit add

Show current status and add selected files.

| Key                                             | Description            |
| :---------------------------------------------- | :--------------------- |
| <kbd>Ctrl</kbd>+<kbd>i</kbd> or <kbd>Tab</kbd>  | Mark/Unmark files      |
| <kbd>Alt</kbd>+<kbd>a</kbd>                     | Add selected files     |

### igit branch

Show local and remote branchs.

| Key                                        | Description                               |
| :----------------------------------------- | :---------------------------------------- |
| <kbd>Alt</kbd>+<kbd>d</kbd>                | Delete selected branch                    |
| <kbd>Alt</kbd>+<kbd>s</kbd>                | Switch to selected branch                 |
| <kbd>Alt</kbd>+<kbd>m</kbd>                | Merge selected branch into current branch |

### igit cherry-pick

Show commit log and cherry-pick selected commit.

| Key                                        | Description            |
| :----------------------------------------- | :--------------------- |
| <kbd>Alt</kbd>+<kbd>c</kbd>                | Cherry-pick the commit |

### igit diff

Shows current status and see diff of selected file.

### igit log

Show log of branch.  

| Key                                        | Description                  |
| :----------------------------------------- | :--------------------------- |
| <kbd>Alt</kbd>+<kbd>h</kbd>                | Reset (hard) to the commit   |
| <kbd>Alt</kbd>+<kbd>m</kbd>                | Reset (mixed) to the commit  |
| <kbd>Alt</kbd>+<kbd>s</kbd>                | Reset (soft) to the commit   |

### igit stash

Show stashes.

| Key                                        | Description                  |
| :----------------------------------------- | :--------------------------- |
| <kbd>Alt</kbd>+<kbd>a</kbd>                | Apply selected stash         |
| <kbd>Alt</kbd>+<kbd>d</kbd>                | Drop selected stash          |

### igit tag

Show tags.

| Key                                        | Description                  |
| :----------------------------------------- | :--------------------------- |
| <kbd>Alt</kbd>+<kbd>s</kbd>                | Switch to selected tag       |

## Key Bingings

Following key bindings are available.

| Key                                                         | Command                |
| :---------------------------------------------------------- | :--------------------- |
| <kbd>Ctrl</kbd>+<kbd>g</kbd> <kbd>Ctrl</kbd>+<kbd>a</kbd>   | igit add               |
| <kbd>Ctrl</kbd>+<kbd>g</kbd> <kbd>Ctrl</kbd>+<kbd>b</kbd>   | igit branch            |
| <kbd>Ctrl</kbd>+<kbd>g</kbd> <kbd>Ctrl</kbd>+<kbd>l</kbd>   | igit log               |
| <kbd>Ctrl</kbd>+<kbd>g</kbd> <kbd>Ctrl</kbd>+<kbd>m</kbd>   | igit merge             |
| <kbd>Ctrl</kbd>+<kbd>g</kbd> <kbd>Ctrl</kbd>+<kbd>s</kbd>   | igit switch            |

