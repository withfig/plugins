# solarized-man

A modified version of oh-my-zsh's plugin [colored-man-pages](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/colored-man-pages), optimized for solarized dark theme in terminal.

## Screenshots

![](https://raw.githubusercontent.com/zlsun/screenshots/master/solarized-man/1.png)

## Installation

### For [oh-my-zsh](http://ohmyz.sh/) users

First, clone this repository into your oh-my-zsh custom plugins directory.

```shell
mkdir -p ~/.oh-my-zsh/custom/plugins
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zlsun/solarized-man.git
```

Then, configure the plugin in your **~/.zshrc** file:

```shell
plugins+=(solarized-man)
```

### For [Antigen](https://github.com/zsh-users/antigen) users

Add the following line to your **~/.zshrc**.

```shell
antigen bundle zlsun/solarized-man
```

### For [zgen](https://github.com/tarjoilija/zgen) users

Add the following line to your **~/.zshrc**.

```shell
zgen load zlsun/solarized-man
```

## License

[MIT License](LICENSE)


