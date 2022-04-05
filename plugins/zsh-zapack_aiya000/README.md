# zapack [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/aiya000/zsh-zapack/LICENSE)
zapack is basic fast minimum zsh plugin **loader** :smile:


# Feature
- **Fast**
    - zapack gives basic function only
- Don't give some functions for managing zsh plugins
    - **You don't have to write some line to .zshrc** :+1:
    - You can use **git-submodule** instead
    - (Assume zapack is used in git repository)
        - For example: your dotfiles repository


# How to install
1. `cd {your-git-repository}`
2. `git submodule add https://github.com/aiya000/zsh-zapack`
3. Define `$ZAPACK_REPODIR` in your .zshrc or .zprofile
    - Recommend what `$ZAPACK_REPODIR` is empty directory
4. Add the line `source {zapack-path}/zapack.zsh` to your .zshrc


# How to use
1. `cd $ZAPACK_REPODIR`
2. `git submodule add {zsh_plugins}`
3. Restart your zsh
    - zsh\_plugins will be loaded by `{your-git-repository}/zsh-zapack/zapack.sh`

