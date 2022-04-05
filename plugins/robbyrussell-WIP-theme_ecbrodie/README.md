# Oh-My-Zsh robbyrussell WIP theme

Use this theme if you love the [oh-my-zsh robbyrussell theme](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme) like I do, but desire to add output to you shell to indicate whether the latest commit in your git repo is a _WIP commit_. Useful in preventing these commits from accidentally sneaking into the `main` branch 😬

![screenshot](images/screenshot.png "Screenshot")

## Installation

**From git repo:**

```sh
git clone --depth 1 git@github.com:ecbrodie/robbyrussell-WIP-theme.git
mkdir -p $ZSH_CUSTOM/themes
cp PATH/TO/robbyrussell-WIP.zsh-theme $ZSH_CUSTOM/themes
```

**Direct download:**

```sh
mkdir -p $ZSH_CUSTOM/themes
(cd $ZSH_CUSTOM/themes && curl -O https://raw.githubusercontent.com/ecbrodie/robbyrussell-WIP-theme/main/robbyrussell-WIP.zsh-theme)
```

And then set the theme in your `.zshrc`:

```sh
ZSH_THEME="robbyrussell-WIP"
```

You could also optionally rename the file to be a drop-in replacement of your existing `robbyrussell` theme:

```sh
mv $ZSH_CUSTOM/themes/robbyrussell-WIP.zsh-theme $ZSH_CUSTOM/themes/robbyrussell.zsh-theme
```

Finally, restart your shell to activate the new theme.

## References

Inspiration for this project came from [this blog post](https://coderwall.com/p/kbnufw/wip-git-oh-my-zsh-improve-your-branch-switching) and the [gallois theme](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/gallois.zsh-theme) it referred to.

## License

[MIT LICENSE](LICENSE) Copyright (c) Evan Brodie

