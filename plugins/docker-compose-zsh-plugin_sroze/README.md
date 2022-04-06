# Docker-Compose ZSH plugin

Add an extra flavor to your ZSH prompt, displaying the machine's name (if isn't `default`) and status of different application
containers.

*`dev_test` the machine's name*

![Example of display](example-screenshot.png)

## Getting started

Download the plugin file [docker-compose.plugin.zsh](https://raw.githubusercontent.com/sroze/docker-compose-zsh-plugin/master/docker-compose.plugin.zsh) and move it to `~/.oh-my-zsh/plugins/docker-compose/docker-compose.plugin.zsh`. Then, add the given plugin in your `plugins` list in the `.zshrc` file:

```zsh
plugins=(git docker docker-compose)
```

Then, update the shell prompt of your theme. The default theme is `robbyrussell` so you can update the `PROMPT` variable in the file `~/.oh-my-zsh/themes/robbyrussell.zsh-theme`.

You have to add the `$(dock_status)% ` expression like in the following example:

```zsh
PROMPT='${ret_status}%{$fg_bold[green]%}%p %{$fg[cyan]%}%c %{$fg_bold[blue]%}$(git_prompt_info)%{$fg_bold[blue]%} %$(dock_status) % %{$reset_color%}'
```


