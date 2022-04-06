# setenv
Oh my zsh plugin to run script on change directory. 

This plugins sources the .setenv file if it exists in the current directory and if it is executable. The plugin maintains a whitelist of directories for which it does not ask before executing the .setnev script. To add the current directory to whitelist, you can run **setenv_whitelist** and to remove the current directory from whitelist you can run **setenv_whitelist_remove**.

## Installation
-   Ensure you have [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh) installed. 
-   Clone this repository in **$ZSH_CUSTOM/plugins/** directory.
-   Enable **setenv** plugin in **$HOME/.zshrc**

