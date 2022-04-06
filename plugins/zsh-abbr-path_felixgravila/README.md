# abbreviated pwd for oh-my-zsh

Functionality of the `theme_title_use_abbreviated_path` parameter from some oh-my-fish themes

Displays the current path with all but the last directory shortened to the first letter

Replaces $HOME with ~

## Installation
copy .abbr_pwd to $HOME then source it from your .zshrc
```
source $HOME/.abbr_pwd
```
You can use my own theme copy if agnoster suits you, but if not you can edit your theme of choice in $HOME/.oh-my-zsh/themes by finding the prompt_dir() method and modifying the contents to contain $(felix_pwd_abbr) as you wish. For agnoster it was as easy as replacing '%~' with $(felix_pwd_abbr).

## Screenshot

![alt text](https://raw.githubusercontent.com/felixgravila/zsh-abbr-path/master/screenshot.png)

## Thanks to contributors

Thank you @charlesdaniels for fix: Fixed behavior for paths containing hidden directories

