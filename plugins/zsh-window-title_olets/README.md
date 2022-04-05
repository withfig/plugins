# zsh-window-title ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/zsh-window-title)

> A zsh plugin for informative terminal window titles

<!-- TOC -->
- [Requirements](#requirements)
- [Installation](#installation)
    - [Homebrew](#homebrew)
    - [With a shell plugin manager](#with-a-shell-plugin-manager)
    - [Manual](#manual)
- [Usage](#usage)
    - [macOS Terminal.app users](#macos-terminalapp-users)
    - [Oh-My-Zsh users](#oh-my-zsh-users)
    - [CLI](#cli)
- [Options](#options)
- [Changelog](#changelog)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#License)

## Requirements

- Zsh

## Installation

### Homebrew

```shell
brew install olets/tap/zsh-window-title
```

### With a shell plugin manager

1. Install zsh-window-title with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

    After adding the plugin to the manager, restart zsh:

    ```shell
    exec zsh
    ```

### Manual

1. Download [the latest `zsh-window-title` binary](https://github.com/olets/zsh-window-title/releases/latest)
1. Either
    - Put the file `zsh-window-title` in a directory in your `PATH` and add `source zsh-window-title` to your `~/.zshrc` file
    - Add `source the/path/to/zsh-window-title` to your `~/.zshrc` file
1. Restart zsh:
    ```shell
    exec zsh
    ```

## Usage

Once zsh-window-title is installed, your terminal window title will be

- `<parent dir>/<current dir>` when nothing's running
- `<parent dir>/<current dir> - <first word of last run command>` when something's running

### macOS Terminal.app users

By default macOS's Terminal app will control the window title. Disable that by:

> Preferences > Profiles > Window > Title --> uncheck everything.

### Oh-My-Zsh users

By default OMZ will control the terminal window title. Disable that by adding

```shell
DISABLE_AUTO_TITLE=”true”
```

to your `~/.zshrc` file.

### CLI

```shell
zwt restore-defaults
    (help | --help | -h)
    (version | --version | -v)
```

- `zwt restore-defaults` Restore options to their defaults in the current session. See [Options](#options).
- `zwt (help | --help | -h)` Show the manpage.
- `zwt (version | --version | -v)` Print the command name and version.

## Options

Variable | Type | Default | Use
---|---|---|---
ZSH_WINDOW_TITLE_DEBUG | integer | `0` | If non-zero, print hook debugging messages
ZSH_WINDOW_TITLE_DIRECTORY_DEPTH | integer | `2` | How many directory levels to display
ZWT_DEBUG | integer | `0` | If non-zero, print CLI debugging messages

## Changelog

See the [CHANGELOG](CHANGELOG.md) file.

## Roadmap

See the [ROADMAP](ROADMAP.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/zsh-window-title/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="https://www.github.com/olets/zsh-window-title">zsh-window-title</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.github.com/olets">Henry Bley-Vroman</a> is licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> with a human rights condition from <a href="https://firstdonoharm.dev/version/2/1/license.html">Hippocratic License 2.1</a>. Persons interested in using or adapting this work for commercial purposes should contact the author.</p>

<img alt="Licensed under Creative Commons" title="Licensed under Creative Commons" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="Licensed with an attribution term" title="Licensed with an attribution term" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="Licensed with a non-commercial term" title="Licensed with a non-commercial term" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img alt="Licensed with a share-alike term" title="Licensed with a share-alike term" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" />

For the full text of the license, see the [LICENSE](LICENSE) file.

