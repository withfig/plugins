# pantheon-terminal-notify zsh plugin

background notifications for long running commands! Supports Elementary OS Freya.

### Package from [t413/zsh-background-notify](https://github.com/t413/zsh-background-notify)

Standalone homepage: [deyvisonrocha/pantheon-terminal-notify-zsh-plugin](https://github.com/deyvisonrocha/pantheon-terminal-notify-zsh-plugin)

----------------------------------

## How to use!

Just add pantheon-terminal-notify to your plugins list in your `.zshrc`

## Screenshot

![Pantheon Terminal Notify](https://cloud.githubusercontent.com/assets/686067/7397992/3c371c8c-ee82-11e4-9249-4ec10a580c70.png)

## Configuration

One can configure a few things:

- `pantheon_terminal_notify_threshold` sets the notification threshold time (default 5 seconds)
- `function pantheon_terminal_notify_threshold` lets you change the notification

Use these by adding a function definition before the your call to source. Example:

~~~ sh
pantheon_terminal_notify_threshold=4  ## set your own notification threshold

function pantheon_terminal_notify_formatted {
  ## $1=exit_status, $2=command, $3=elapsed_time
  [ $1 -eq 0 ] && title="Holy Smokes Batman!" || title="Holy Graf Zeppelin!"
  pantheon_terminal_notify "$title -- after $3 s" "$2";
}

plugins=(git pantheon_terminal_notify)  ## add to plugins list
source $ZSH/oh-my-zsh.sh  ## existing source call
~~~

