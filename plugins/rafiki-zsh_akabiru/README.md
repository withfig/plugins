Rafiki-zsh is a [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) theme that adds emojis to your zsh terminal.
Rafiki will display a `good` emoji such as 😄 on your prompt whenever commands run smoothly and `bad` emojis
such as 😡 whenever things go wrong.

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

Feel free to contribute, even if it's to add an emoji. 😉 Just fork it 🍴 and raise a pull request.

### Credits

This projects borrows from [Robby Russell's](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme) theme.
Not forgetting [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) itself. 😄

