![](https://www.dropbox.com/s/u08c2zofducjvh9/rafiki-zsh-2.png?raw=1)

## Rafiki-zsh

Rafiki-zsh is a [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) theme that adds emojis to your zsh terminal.
Rafiki will display a `good` emoji such as :smile: on your prompt whenever commands run smoothly and `bad` emojis
such as :rage: whenever things go wrong.


### Prerequisites

* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

### Setup

1. Download rafiki zsh as a oh-my-zsh custom theme:

```bash
 $ mkdir -p $ZSH_CUSTOM/themes && curl -o $ZSH_CUSTOM/themes/rafiki.zsh-theme https://raw.githubusercontent.com/akabiru/rafiki-zsh/develop/rafiki.zsh-theme
```

2. Set `ZSH_THEME` to `rafiki` in your `~/.zshrc`.

```bash
$ vim ~/.zshrc
 # ZSH_THEME='rafiki'
```

3. Reload your zsh configuration and Voila! Rafiki is watching over you. :sunglasses:

```bash
$ source ~/.zshrc
```
### Usage

Rafiki generates random emojis every time you start up your terminal. It also tells you who your pals are for the session.

To generate a new set just run `newrafiki`

    $ newrafiki

You can also run `rafiki` to remind yourself your emoji set.

    $ rafiki

### Customization

Rafiki is pretty customizable.

If you prefer to have a constant set of emojis just set your `good`emoji and `bad` emoji in `.zshrc` as follows.

For good emojis, set `$MY_GOOD_RAFIKI` to one of the following: `fire muscle pointright facepunch smile sunglasses` and
your `bad` emoji to one of the following: `rollingeyes pouting confused flushed middlefinger worried`

    $MY_GOOD_RAFIKI='fire'
    $MY_BAD_RAFIKI='rollingeyes'

Then reload your zsh configuration.

    $ source ~/.zshrc

You can also add your own emojis to the supported set. Just add the emoji to one of the arrays; `good` or `bad` with the
emoji name as the key emoji as the value. For example:
```
good[100] = 💯
```

#### Inspiration

If you've seen the American animated epic musical film: **Lion King** the name `Rafiki` will resonate well with you.

Introducing _Rafiki_

![rafiki](https://i.imgur.com/mu2h8fs.jpg)

### Contributing

Feel free to contribute, even if it's to add an emoji. :wink: Just fork it :fork_and_knife: and raise a pull request.

### Credits

This projects borrows from [Robby Russell's](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme) theme.
Not forgetting [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) itself. :smile:

