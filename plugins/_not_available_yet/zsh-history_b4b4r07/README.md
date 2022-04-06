> A plugin for zsh history extended by golang, dealing it like SQL

![](https://cl.ly/032Z0Y2Z0Q2v/c.gif)

## Features

- Fast and simple
- Searchable by SQL
	- History searchable per directory
	- etc...
- Can sub-string search (like [zsh-users/zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search))
- Automatically backup daily DB file like:

    ```console
    $ tree $ZSH_HISTORY_BACKUP_DIR
    /Users/b4b4r07/.zsh/history/backup
    `-- 2017
        `-- 02
            |-- 13.db
            `-- 14.db
    
    2 directories, 2 files
    ```


## Usage

Set the env like the following:

```zsh
# DB file path
export ZSH_HISTORY_FILE="$HOME/.zsh_history.db"
# CLI selector
export ZSH_HISTORY_FILTER="fzy:fzf:peco:percol"

# History per directory
export ZSH_HISTORY_KEYBIND_GET_BY_DIR="^r"
# All histories
export ZSH_HISTORY_KEYBIND_GET_ALL="^r^a"

# Run any SQLs on original selector I/F (with screen)
export ZSH_HISTORY_KEYBIND_SCREEN="^r^r"

# substring
export ZSH_HISTORY_KEYBIND_ARROW_UP="^p"
export ZSH_HISTORY_KEYBIND_ARROW_DOWN="^n"
```

## About zhist

### Schema

Table name: `history`

Name | Type | Desc
---|---|---
id | int | ID
date | string | Date time (format by `%F %T`)
dir | string | Direcotry when executed
command | string | Command
status | int | Status code (`$?`)
host | string | Host name

### Configurable

Located in `~/.config/zhist/config.toml`:

```toml
prompt = "sqlite3> "
init_query = "SELECT DISTINCT(command) FROM history WHERE command LIKE '%%' AND status = 0 ORDER BY id DESC"
init_cursor = "%"
vim_mode_prompt = "VIM-MODE"
ignore_words = [
    "false",
    "echo",
]
```

## License

MIT

## Author

b4b4r07


