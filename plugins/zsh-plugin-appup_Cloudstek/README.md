# AppUp

> The command that can save you typing 15 characters or more, each time!

[![CircleCI](https://circleci.com/gh/Cloudstek/zsh-plugin-appup.svg?style=svg)](https://circleci.com/gh/Cloudstek/zsh-plugin-appup)

This plugins adds `start`, `restart`, `stop`, `up` and `down` commands when it detects a docker-compose or Vagrant file in the current directory (e.g. your application). Just run `up` and get coding! This saves you typing `docker-compose` or `vagrant` every time or aliasing them. Also gives you one set of commands that work for both environments.

### Docker

Aside from simply running `up`, you can also extend your configuration by running `up <name>`, which will run `docker-compose` with both `docker-compose.yml` and extend it with `docker-compose.<name>.yml`. For more on extending please see the [official docker documentation](https://docs.docker.com/compose/extends). Additional arguments will be directly supplied to the docker-compose.

### Vagrant

Vagrant doesn't have a `down`, `restart`, `start` or `stop` commands natively but don't worry, that's been taken care of and running those commands will actually run vagrant's equivalent commands. Additional arguments will be directly supplied to vagrant.

### Command mapping

| Command | Vagrant command                                            | Docker command                                               |
| ------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| up      | [up](https://www.vagrantup.com/docs/cli/up.html)           | [up](https://docs.docker.com/compose/reference/up/)          |
| down    | [destroy](https://www.vagrantup.com/docs/cli/destroy.html) | [down](https://docs.docker.com/compose/reference/down/)      |
| start   | [up](https://www.vagrantup.com/docs/cli/up.html)           | [start](https://docs.docker.com/compose/reference/start/)    |
| restart | [reload](https://www.vagrantup.com/docs/cli/reload.html)   | [restart](https://docs.docker.com/compose/reference/restart/) |
| stop    | [halt](https://www.vagrantup.com/docs/cli/halt.html)       | [stop](https://docs.docker.com/compose/reference/stop/)      |

## Installation

### oh-my-zsh

1. Clone this repository in `$ZSH_CUSTOM/plugins/appup`:

   ```bash
   git clone https://github.com/Cloudstek/zsh-plugin-appup.git "$ZSH_CUSTOM/plugins/appup"
   ```
2. Edit `~/.zshrc` and add `appup` to the list of plugins

### Plain ZSH

1. Clone this repository somewhere

2. Edit your `~/.zshrc` and add this line near the bottom of the file:

   ```bash
   source path/to/the/repository/appup.plugin.zsh
   ```

## Updating

1. Go to the directory where you cloned the plugin repository
2. Run `git pull origin master`

## Configuration options

AppUp has a few configuration options to customise its behaviour. Please make sure you define these in `~/.zshrc` *before* you load any plugins.

| Name                 | Values     | Default | Description                                                  |
| -------------------- | ---------- | ------- | ------------------------------------------------------------ |
| APPUP_CHECK_STARTED  | true/false | true    | Enable/disable checking if docker is running completely.     |
| APPUP_DOCKER_MACHINE | true/false | true    | If both docker (e.g. Docker Desktop) and docker-machine are installed, check if docker-machine (when `true`) or docker (when `false`) is running. |
|                      |            |         |                                                              |


