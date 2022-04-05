# Purity ZSH Theme

## Install
- Automatic: `npm i -g purity-zsh-theme`
- Manual:
```console
git clone https://github.com/pmbenjamin/purity.git && cd purity
mkdir -p $HOME/.oh-my-zsh/custom/themes/
cp purity.zsh-theme $HOME/.oh-my-zsh/custom/themes/
```

## Customize
```console
# $HOME/.oh-my-zsh

# ...

ZSH_THEME="purity"         # ENABLE THIS THEME

# CUSTOMIZABLE THEME
PURITY_PROMPT_SYMBOL=→     # DEFAULT IS ❯
PURITY_GIT_PROMPT_DIRTY=⚠  # DEFAULT IS ○
PURITY_GIT_PROMPT_CLEAN=✓  # DEFAULT IS ●

# ...
```
## Demo
![Demo](demo/demo.gif)
## Screenshot
![Purity](demo/screenshot.png)


