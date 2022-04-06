# Lime

Simple standalone Zsh theme.

<img width="570" alt="Lime" src="demo/lime.png">

Colors are brought from [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme#tomorrow-night).

## Usage

### [Antigen](https://github.com/zsh-users/antigen)

``` zsh
antigen bundle yous/lime
```

### [zgen](https://github.com/tarjoilija/zgen)

``` zsh
zgen load yous/lime
```

### [zplug](https://github.com/zplug/zplug)

``` zsh
zplug "yous/lime"
```

### [zplugin](https://github.com/zdharma/zplugin)

``` zsh
zplugin light yous/lime
```

### [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Clone this repository and make symbolic links to oh-my-zsh.

``` sh
git clone https://github.com/yous/lime.git
cd lime
ln -s "$PWD/lime.plugin.zsh" ~/.oh-my-zsh/themes/lime.zsh-theme
```

Then select the theme in `.zshrc`:

``` zsh
ZSH_THEME="lime"
```

## Options

### `LIME_SHOW_HOSTNAME`

Set `LIME_SHOW_HOSTNAME=1` to see the hostname when you're connecting via SSH.
The default value is `0`.

### `LIME_DIR_DISPLAY_COMPONENTS`

The number of trailing components of the current working directory. If you set
`LIME_DIR_DISPLAY_COMPONENTS=3`, it'll display `...bar/baz/qux` when you're on
`~/foo/bar/baz/qux`. The default value is `0`, which shows the whole path.

### `LIME_USER_COLOR`

Color for user and hostname, between `0` and `255`. Also you can set this with
color names. For the full list of the colors, see [this gist](https://gist.github.com/yous/c303055cf65a99d65488).
The default value is `109` if you have 256 colors support, `cyan` otherwise.

### `LIME_DIR_COLOR`

Color for the current directory, between `0` and `255`. Also you can set this
with color names. The default value is `143` if you have 256 colors support,
`green` otherwise.

### `LIME_GIT_COLOR`

Color for the current git status, between `0` and `255`. Also you can set this
with colors names. The default value is `109` if you have 256 colors support,
`cyan` otherwise.

## License

Copyright © Chayoung You. See [LICENSE.txt](LICENSE.txt) for details.

