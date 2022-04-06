# Auto-ls

There are many `auto-ls`s out there but this one is mine.

# Features

- Custom command on `cwd`/`enter-key`
- Auto `ls` on `cwd`
- Auto `ls` on `enter-key` (with empty buffer)
- Git status on a git work tree

# Install

- Manual

      curl -L https://git.io/auto-ls > /path/to/auto-ls.zsh
      source /path/to/auto-ls.zsh

- [Antigen](https://github.com/zsh-users/antigen)

      antigen bundle desyncr/auto-ls

- [zplugin](https://github.com/zdharma/zplugin)

      zplugin ice wait'0' lucid
      zplugin load desyncr/auto-ls

# Configuration

- `AUTO_LS_COMMANDS`: Use this configuration option to define the functions to run on cwd/enter-key.

Example: `AUTO_LS_COMMANDS=(ls git-status)`

- `AUTO_LS_NEWLINE`: Configure `ls` to put a newline (Default: true).

Example: `AUTO_LS_NEWLINE=false`

- `AUTO_LS_PATH`: Detect command full path to execute (Default: true).

Example: `AUTO_LS_PATH=false`

-  `AUTO_LS_CHPWD`: Enable/disable auto-ls on directory change (Default: true)

Example: `AUTO_LS_CHPWD=false`

# Customization

You can configure commands in order to execute on `cwd`/`ls`, example:

```

AUTO_LS_COMMANDS=(ls git-status '/usr/bin/git log')
# Or...
AUTO_LS_COMMANDS=(ls git-status '[[ -d $PWD/.git ]] && /usr/bin/git log|head')

```

You may redefine default functions or define custom functions to be run on cwd/enter-key:

- Before loading auto-ls define a function to be executed:

      auto-ls-custom_function () {
        echo "Current directory list:"
        ls -ltra
      }


    * Be sure to call it `auto-ls-`\<name of your function\>.

- Configure auto-ls to load your function. Put the following line before sourcing auto-ls:

      AUTO_LS_COMMANDS=(custom_function)

   * Only use \<name of your function\> rather than `auto-ls-`\<name of your function\>.

You may as well load the default functions, `ls` and `git-status`:

     AUTO_LS_COMMANDS=(ls git-status custom_function)

# Future

- `zstyle` options to customize ls options
- `zstyle` options to customize git status

