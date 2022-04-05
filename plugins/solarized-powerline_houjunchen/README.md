# solarized-powerline
Solarized powerline style theme for zsh

Forked from [agnoster's theme](https://gist.github.com/3712874) and influenced by [maverick2000's theme](https://github.com/maverick2000/zsh2000) and [iijeremyFreeAgent's theme](https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme).

### Preview
![preview](https://raw.github.com/houjunchen/solarized-powerline/master/preview.png)

![preview2](https://raw.github.com/houjunchen/solarized-powerline/master/preview2.png)

### Information segments
* Left prompt
  1. Command status
  2. User@hostname (optional)
  3. Working directory
  4. Python virtual environment (option: `SP_DISABLE_VIRTUAL_ENV_PROMOT`)
  5. Git status
  6. Hg status
* Right prompt
  1. Zsh vi mode indicator (option: `SP_DISABLE_VI_INDICATOR`)
  2. time

### Prerequisites

Install your favorite version of
[Powerline-patched fonts](https://github.com/powerline/fonts)

### Installation

```
git clone https://github.com/houjunchen/solarized-powerline.git
cd solarized-powerline
ln -s solarized-powerline.zsh-theme ~/.oh-my-zsh/themes/solarized-powerline.zsh-theme
```
Note: To avoid `too many levels of symbolic links`, you may need to use absolute target in `ln -s`.

Modify ~/.zshrc setting

```
ZSH_THEME="solarized-powerline"
```

