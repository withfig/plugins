# Copyzshell
An oh-my-zsh plugin to copy oh-my-zsh and your .zshrc and .gitconfig files to a remote machine using SSH.
## Installation
1. clone this repository into your oh-my-zsh custom/plugins folder:

    ```zsh
    git clone https://github.com/rutchkiwi/copyzshell.git ~ZSH_CUSTOM/plugins/copyzshell
    ```

2. Include `copyzshell` in your .zshrc file along with the rest of your plugins:

    ```zsh
    ...
    plugins=(git autojump copyzshell)
    ...
    ```

3. Restart your zsh session

## Usage
```
copyzshell <remote machine>
```

The remote machine adress has the same format as the normal ssh command.
It will prompt you for your password up to 3 times (one to scp the files, one to ssh into the machine, and one to change your login shell to zsh).

The next time you log in to the remote machine you should get your own cozy, customised shell!

