# fd-zsh Plugin

[fd](https://github.com/sharkdp/fd) aliases plugin for zsh.

This plugin defines useful aliases that can be used for `fd` the moden alternative of `find`.



## Installation 
This plugin is written with MacOS in mind. but it should work on any unix based OS.

1. First, Install exa 

```bash
brew install fd
```

2. Install the plugin from fig store

## Usage/Examples
This project contain some useful aliasses that you can run in your terminal that zsh supported like `ITerm2`. 

You can type in the alias in your terminal. This is a list of available aliasses.


| Alias | Command            | Help                                                     |
|:-----:|:------------------:|:--------------------------------------------------------:|
| fd    | fd --color always                | Always colorize output by default |
| fd_details     | fd  --list-details            | list details                                          |
| fd_ext    | fd --extension             | Filter by file extension, insert <extension> after this command                                                |
| fd_name   | fd --glob | Filter by file name (default: regular expression)                    |
| fd_case    | fd --ignore-case    |  Search hidden files and directories                                                 |
| fd_abs    | fd --absolute-path   | Show absolute instead of relative paths                                    |
| fd_exec  | fd --exec         | Execute command for each search result                                                |
| fd_execlude    | fd --exclude             | Exclude files and directories that match the given glob pattern <pattern>                                 |
| fd_size    | fd --size    |  SFilter by file size (insert <size> after this command)                                                 |
| fd_owner    | fd --owner    |  Filter by file owner (insert <user:group> after this command)                                                 |
| fd_symbolic    | fd --follow    |  Follow symbolic links                                                 |
| fd_version    | fd --version    |  Show version information                                                 |
| fd_help    | fd --help    |  Show help message                                                 |

## Authors

- [@MohamedElashri](https://www.github.com/MohamedElashri)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

