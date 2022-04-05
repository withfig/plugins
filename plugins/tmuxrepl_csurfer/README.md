# tmuxrepl

[![Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/csurfer/tmuxrepl/master/LICENSE)
[![Thanks](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/csurfer)

Stupidly simple zsh plugin to have a R-EP-L tmux session.

I like to keep my tmux workspace organized into a CommandPanel(to type commands in)
and an ExecutionPanel(where the command gets executed). This plugin achieves exactly
that.

![Demo](https://i.imgur.com/5zCbqIo.gif)

## Setup

1. Clone the repository into oh-my-zsh custom plugin folder.
```zsh
git clone https://github.com/csurfer/tmuxrepl.git ~/.oh-my-zsh/custom/plugins/tmuxrepl
```

2. Add `tmuxrepl` into plugin list in your `.zshrc`

3. `source ~/.zshrc`

## Usage

With setup properly done, you should be able to enter the tmux REPL session using
command `tmuxrepl`. To exit use `Ctrl-C`.

## Special key bindings

We use a lot of special keys in our day to day shell usage. To actually send those keys to
the execution pane you have to use it in terms that tmux can understand i,e how you would
use them in tmux.conf. A few examples are listed below.

|   Key  |   Command panel equivalent |
|:------:|:--------------------------:|
| Enter  |   `Enter` or `C-m`         |
| Escape |   `Escape`                 |

## Contributing

### Bug Reports and Feature Requests

Please use [issue tracker](https://github.com/csurfer/tmuxrepl/issues) for
reporting bugs or feature requests.

### Development

Pull requests are most welcome.

### Buy the developer a cup of coffee!

If you found the utility helpful you can buy me a cup of coffee using

[![Donate](https://www.paypalobjects.com/webstatic/en_US/i/btn/png/silver-pill-paypal-44px.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=3BSBW7D45C4YN&lc=US&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)

