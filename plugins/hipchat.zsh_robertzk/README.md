hipchat.zsh
===========

A zsh plugin to send messages over Hipchat to your friends through shell. You should have `curl`
installed and set the environment variable [`HIPCHAT_API_TOKEN`](https://avantcredit.hipchat.com/account/api).

Then you can send quick pings from the command line!

```bash
hipchat your@friend.com Hey buddy
```

If you run into trouble you can also use the `-d` flag to output the URL and POST 
parameters that are sent to the [Hipchat API](https://www.hipchat.com/docs/apiv2/method/private_message_user).

*Note*: If no `@` character is detected in the first argument, it will assume
you would like to [send to a room](https://www.hipchat.com/docs/apiv2/method/send_room_notification) instead.

# Installation

## antigen users

If you're using [Antigen](https://github.com/zsh-lovers/antigen), add `antigen bundle robertzk/hipchat.zsh` to your `.zshrc` where you're loading your other modules. If you want to test it before adding it to your .zshrc, just run `antigen bundle robertzk/hipchat.zsh` in a running zsh session.

## oh-my-zsh users

Assuming you have [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), you can
simply run:

```bash
git clone git@github.com:robertzk/hipchat.zsh.git ~/.oh-my-zsh/custom/plugins/hipchat
echo "plugins+=(hipchat)" >> ~/.zshrc
```
in a zsh session.

(Alternatively, you can place the `hipchat` plugin in the `plugins=(...)` local in your `~/.zshrc` manually.)

## zgen users

If you're using [zgen](https://github.com/tarjoilija/zgen), add `zgen load robertzk/hipchat.zsh` to your `.zshrc` where you're loading your other modules.

## bash users

If you use the non-recommended alternative, bash, you can install this directly to your `~/.bash_profile`:

```bash
curl -s https://raw.githubusercontent.com/robertzk/hipchat.zsh/master/hipchat.plugin.zsh >> ~/.bash_profile
```

Usage
-----

```bash
Usage: hipchat [-d] <email or room> <message>
-d: debug (more verbose output)
```


