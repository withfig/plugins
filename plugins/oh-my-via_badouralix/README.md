# VIA theme for ZSH

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/badouralix/oh-my-via/ci?logo=github)](https://github.com/badouralix/oh-my-via)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/badouralix/oh-my-via?label=build&logo=docker&logoColor=white)](https://hub.docker.com/r/badouralix/oh-my-via)
[![WTFPLv2 License](https://img.shields.io/github/license/badouralix/oh-my-via?color=lightgrey&logo=github)](http://www.wtfpl.net)

This is a theme for ZSH which mainly forks the historical theme used on
[VIA Centrale Réseaux](https://via.l4th.fr/) servers. It can be used with
ZSH frameworks such as [Oh-My-ZSH](https://github.com/robbyrussell/oh-my-zsh).

- [Preview](#preview)
- [Info](#info)
  - [VCS caption](#vcs-caption)
- [Usage](#usage)
  - [Install for Oh-My-ZSH](#install-for-oh-my-zsh)
  - [Customization](#customization)
- [Unit testing](#unit-testing)
- [License](#license)

## Preview

![Oh-My-VIA theme preview](https://user-images.githubusercontent.com/19719047/85171739-db627c00-b26f-11ea-94ef-8f1f87929c47.png "Oh-My-VIA theme preview")

Test [oh-my-via](https://github.com/badouralix/oh-my-via) easily without installing it with this [docker image](https://hub.docker.com/r/badouralix/oh-my-via/) :

```bash
docker run -it --rm badouralix/oh-my-via
```

## Info

### VCS caption

| Color  |           State            |           Variable            |
| :----: | :------------------------: | :---------------------------: |
|  red   |  there are unstaged files  | `OHMYVIA_VCS_COLOR_UNSTAGED`  |
| yellow |   there are staged files   |  `OHMYVIA_VCS_COLOR_STAGED`   |
|  blue  | there are untracked files  | `OHMYVIA_VCS_COLOR_UNTRACKED` |
|  cyan  |  stash stack is not empty  |   `OHMYVIA_VCS_COLOR_STASH`   |
| green  | working directory is clean |   `OHMYVIA_VCS_COLOR_CLEAN`   |

## Usage

### Install for Oh-My-ZSH

Oh-My-VIA is available as an [external theme for Oh-My-ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#oh-my-via).

In order to use this theme, you have to clone this repository in your Oh-My-ZSH
`custom/themes` directory ( usually `~/.oh-my-zsh/custom/themes` ) :

```zsh
git clone https://github.com/badouralix/oh-my-via.git $ZSH/custom/themes/oh-my-via
```

You then need to select this theme in your `~/.zshrc` :

```zsh
ZSH_THEME="oh-my-via/via"
```

### Customization

Prompt is composed of several widgets that are displayed one after the other.

#### Date and time

|       Variable        | Description                      |   Default    |
| :-------------------: | :------------------------------- | :----------: |
| `OHMYVIA_TIME_COLOR`  | Background and foreground color. | `%B%F{cyan}` |
| `OHMYVIA_TIME_FORMAT` | Display date and time.           | `%D{%H:%M}`  |

#### Context ( user and hostname )

Context prompt showing `user@hostname`.

|             Variable              | Description                                                                                       |    Default     |
| :-------------------------------: | :------------------------------------------------------------------------------------------------ | :------------: |
|    `OHMYVIA_CONTEXT_HOSTNAME`     | Display hostname. Set to `partial` to print up to the first `.`. Set to `empty` to hide hostname. |     `full`     |
| `OHMYVIA_CONTEXT_HOSTNAME_COLOR`  | Hostname background and foreground color.                                                         | `%B%F{white}`  |
| `OHMYVIA_CONTEXT_SEPARATOR_COLOR` | `@` separator between the user and the hostname background and foreground color.                  | `%B%F{yellow}` |
|   `OHMYVIA_CONTEXT_ROOT_COLOR`    | Root username background and foreground color.                                                    |  `%B%F{blue}`  |
|   `OHMYVIA_CONTEXT_USER_COLOR`    | Non-root username background and foreground color.                                                |  `%B%F{red}`   |

#### Working directory

|      Variable       | Description                                                                                                                                       |    Default    |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-----------: |
| `OHMYVIA_DIR_COLOR` | Background and foreground color.                                                                                                                  | `%B%F{green}` |
| `OHMYVIA_DIR_SIZE`  | Number of trailing components of the current directory to show. Set to `0` to show the whole path. Set to `1` to show only the current directory. |      `0`      |

#### VCS theme

|      Variable       | Description                                                           |  Default  |
| :-----------------: | :-------------------------------------------------------------------- | :-------: |
| `OHMYVIA_VCS_THEME` | Git prompt theme ( see [available themes](functions/vcs_themes.zsh) ) | `default` |

## Unit testing

Oh-My-VIA uses [ZUnit](https://github.com/molovo/zunit) as unit testing framework.

To run the tests, just run:

```zsh
# Directly with zunit
zunit run tests

# Indirectly with act
act --job zunit
```

## License

Unless explicitly stated to the contrary, all contents licensed under the [WTFPL](LICENSE).

