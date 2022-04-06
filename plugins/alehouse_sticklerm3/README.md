# alehouse

My custom zsh-plugin for `zsh` inspired by [betterbrew][8a51380c].

`alehouse-zsh-plugin` contains short aliases for homebrew commands. For now I just have the ones from my personal `.aliases` file and those from [betterbrew][8a51380c].

The latest update adds the functionality to `cd` to various Homebrew locations on the filesystem using `hash -d`. To use just `cd` to its hash with `~` preceding the hash. Example:

```sh
$ cd ~taps
/usr/local/Homebrew/Library/Taps
```

If you have the `autocd` option enabled, you can simple enter the folders name with the `~` as a prefix to make things even faster!

```sh
$ ~brche
~/Library/Caches/Homebrew
```

This plugin is for my personal use and is always a work in progress. Feel free to use it, and dont be afraid make suggestions or offer any corrections to any mistakes you might find!

## Example

Without typing full homebrew commands in console, like:

```sh
$ brew install zsh --build-from-source
```

there is more convenient alias:

```sh
$ bifs zsh
```

## Installation

Installation of Alehouse is super easy! I have instructions listed below for use with [oh-my-zsh](https://ohmyz.sh). Otherwise clone this repo somewhere on your systeem, source the `alehouse-plugin.zsh` in your `zshrc` and restart your shell (`source ~/.zshrc`) to begin using!

### oh-my-zsh

1. Go to `oh-my-zsh` plugins directory:

```sh
$ cd ~/.oh-my-zsh/custom/plugins
```

2. Clone the repository into a new directory `alehouse` :

```sh
git clone https://github.com/sticklerm3/alehouse-zsh-plugin.git alehouse
```

3. Enable `alehouse` plugin by adding to your `.zshrc` configuration file:

```sh
$ plugins=(alehouse)
```

4. Restart your shell.

```sh
$ source ~/.zshrc
```

## Usage

To see a list of all available aliases just type `alias` into your terminal prompt.

### Brew every day

The best part of waking up is having shortcuts in your cup! Some of my most used examples are listed below!

| alias       | command                                                                                              |
| :---------- | :--------------------------------------------------------------------------------------------------- |
| `bs`        | `brew search`                                                                                        |
| `bsd`       | `brew search --desc`                                                                                 |
| `bi`        | `brew info`\*                                                                                        |
| `bis`       | `brew install`                                                                                       |
| `cask`      | `brew cask`                                                                                          |
| `ci`        | `cask info`                                                                                          |
| `cis`       | `cask install`                                                                                       |
| `brewup`    | `brew -v update && brew -v upgrade && brew cask upgrade && brew -v cleanup --prune=5 && brew doctor` |

### Cask Tools

| Name          | Usage                     | Description                                                     |
| ------------- | ------------------------- | --------------------------------------------------------------- |
| `tokenizer`   | `tokenizer path/to/app`   | Finds the `token` for an application to name and create a cask. |
| `findappcast` | `findappcast path/to/app` | Finds `appcast` information for the given app, if available     |

## All Aliases

### My additions

| Alias  | Command               |
| :----: | :-------------------- |
|  `bi`  | `brew info\*`         |
| `bis`  | `brew install`        |
| `brdr` | `brew doctor`         |
| `brls` | `brew list`           |
|  `bs`  | `brew search`         |
| `bsd`  | `brew search --desc`  |
| `cask` | `brew cask`           |
|  `ci`  | `brew cask info`      |
| `cis`  | `brew cask install`   |
| `cus`  | `brew cask uninstall` |
| `cuz`  | `brew cask zap`       |
| `blv`  | `brew leaves`         |

> - `bi` currently conflicts with the bundler package currently included with omz. Comment this out if you prefer to use that one.

### betterbrew aliases

> aliases that are ~~crossed out~~ have been removed.

|   betterbrew | Command           |
| -----------: | :---------------- |
|      `binst` | brew install      |
|     `buinst` | brew uninstall    |
|       `bupd` | brew update       |
|       `blst` | brew list         |
|      `bsrch` | brew search       |
|      `banal` | brew analytics    |
|       `bcat` | brew cat          |
|     `bclean` | brew cleanup      |
|       `bcom` | brew command      |
|      `bcoms` | brew commands     |
|       `bcon` | brew config       |
|      `bdeps` | brew deps         |
|      `bdesc` | brew desc         |
|       `bdiy` | brew diy          |
|       `bdoc` | brew doctor       |
|     `bfetch` | brew fetch        |
|      `bgist` | brew gist-logs    |
|      `bhome` | brew home         |
|      `binfo` | brew info         |
|    `bleaves` | brew leaves       |
|        `bln` | brew ln           |
|       `blog` | brew log          |
|       `bmig` | brew migrate      |
|      `bmiss` | brew missing      |
|       `bopt` | brew options      |
|       `bout` | brew outdated     |
|       `bpin` | brew pin          |
|     `bpinst` | brew postinstall  |
| ~~`bprune`~~ | ~~brew prune~~    |
|      `bread` | brew readall      |
|     `brinst` | brew reinstall    |
|        `bsh` | brew sh           |
|     `bstyle` | brew style        |
|    `bswitch` | brew switch       |
|       `btap` | brew tap          |
|   `btapinfo` | brew tap-info     |
|    `btappin` | brew tap-pin      |
|  `btapunpin` | brew tap-unpin    |
|     `bulink` | brew unlink       |
|     `bupack` | brew unpack       |
|      `bupin` | brew unpin        |
|      `butap` | brew untap        |
|      `bupdr` | brew update-reset |
|      `bupgr` | brew upgrade      |
|      `buses` | brew uses         |
|     `bcache` | brew --cache      |
|      `bcell` | brew --cellar     |
|       `benv` | brew --env        |
|    `bprefix` | brew --prefix     |
|      `brepo` | brew --repository |
|       `bver` | brew --version    |

## Hashes

|    Name    | Location          |
| :--------: | :---------------- |
|  `brewr`   | `brew --repo`     |
|  `brpfx`   | `brew --prefix`   |
|   `taps`   | `brew --taps`     |
|  `cellar`  | `brew --cellar`   |
| `caskroom` | `brew --caskroom` |
|  `brche`   | `brew --cache`    |

---

To-do:

- [x] replace alias for `brew prune` as its been deprecated.
- [ ] re-organize cheatsheet to be sorted by category.

[8a51380c]: https://github.com/timothyrowan/betterbrew-zsh-plugin "betterbrew on github"

