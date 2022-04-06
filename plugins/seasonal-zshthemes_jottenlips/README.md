# Install

seasonal zsh prompts with git status

>- Get ZSH https://github.com/robbyrussell/oh-my-zsh

>- Clone me

>- Run

`cd seasonal-zshthemes` 

## Automatically set the theme for the season you are experiencing. 

Copy all seasonal themes. 

```console
cp holiday.zsh-theme ~/.oh-my-zsh/themes/
cp halloween.zsh-theme ~/.oh-my-zsh/themes/
cp winter.zsh-theme ~/.oh-my-zsh/themes/
cp fall.zsh-theme ~/.oh-my-zsh/themes/
cp spring.zsh-theme ~/.oh-my-zsh/themes/
cp seashell.zsh-theme ~/.oh-my-zsh/themes/
```

Then set your zsh theme to the get theme for season shell script.

```console
$ vim ~/.zshrc
```

```
ZSH_THEME=$(sh ~/seasonal-zshthemes/get_theme_season.sh)
```

## Themes


# Holiday

```console
$ cp holiday.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](holiday.png?raw=true "Holiday Screen Shot")
> Add `ZSH_THEME="holiday"` to your zshrc.


# Winter

```console
$ cp winter.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](winter.png?raw=true "Winter Screen Shot")
> Add `ZSH_THEME="winter"` to your zshrc.

# Halloween

```console
$ cp halloween.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](halloween.png?raw=true "Halloween Screen Shot")
> Add `ZSH_THEME="halloween"` to your zshrc.

# Fall

```console
$ cp fall.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](fallscreenshot.png?raw=true "Fall Screen Shot")
> Add `ZSH_THEME="fall"` to your zshrc.


# Summer

```console
$ cp seashell.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](screenshot.png?raw=true "Summer Screen Shot")
> Add `ZSH_THEME="seashell"` to your zshrc.

# Spring

```console
$ cp spring.zsh-theme ~/.oh-my-zsh/themes/
```

![Screen Shot](spring.png?raw=true "Spring Screen Shot")
> Add `ZSH_THEME="spring"` to your zshrc.



*More:*

For more themes and plugins check out https://github.com/unixorn/awesome-zsh-plugins.

