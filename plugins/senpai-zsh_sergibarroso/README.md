# Senpai - 先輩
Senpai is a ZSH clean prompt theme for Devops.

<img src="senpai_cmd_dark_screenshot.png" width="864">

<img src="senpai_cmd_white_screenshot.png" width="864">

## But why?

- Shows `git` branch and status.
- Prompt character turns red if the last command didn't exit with `0`.
- Shows `Kubernetes` context, `AWS` profile, `GCP` project and `Azure` active cloud.
- Prompt is customizable through vars.

## Installation

Requires Git 2.0.0+ and ZSH 5.2+

### Install without any framework
If you just use a zsh without any framework, simply clone this repository and reference it in your ~/.zshrc:

```sh
$ git clone https://github.com/hiroru/senpai-zsh.git ~/.senpai-zsh
$ echo 'source  ~/.senpai-zsh/senpai.zsh-theme' >> ~/.zshrc
```

### Install for Oh-My-ZSH
To install this theme for use in Oh-My-Zsh, clone this repository into your OMZ custom/themes directory.

```sh
$ git clone https://github.com/hiroru/senpai-zsh.git ~/.oh-my-zsh/custom/themes/senpai-zsh
```
You then need to select this theme in your ~/.zshrc:

ZSH_THEME="hiroru/senpai-zsh"

### Install for ZIM
To install this theme for use in ZIM, clone this repository into your ZIM prompt/external-themes directory.

```sh
$ git clone https://github.com/hiroru/senpai-zsh.git ~/.zim/modules/prompt/external-themes/senpai-zsh
$ ln -s ~/.zim/modules/prompt/external-themes/senpai-zsh/senpai.zsh-theme ~/.zim/modules/prompt/functions/prompt_senpai_setup
```
Add this at the beginning of your ~/.zshrc:

`SENPAI_INSTALLATION_PATH=~/.zim/modules/prompt/external-themes/senpai-zsh/senpai.zsh-theme`

You then need to select this theme in your ~/.zimrc:

`zprompt_theme='senpai'`

## Options

You can add these values which are self-explanatory into your `~/.zshrc` file. By default all options are enabled.

### `SENPAI_SHOW_TIME`
### `SENPAI_SHOW_USER`
### `SENPAI_SHOW_PATH`
### `SENPAI_SHOW_GIT`
### `SENPAI_SHOW_VIRT`
### `SENPAI_SHOW_K8S`
### `SENPAI_SHOW_AWS`
### `SENPAI_SHOW_GCP`
### `SENPAI_SHOW_AZURE`

### Example

```sh
# .zshrc

autoload -U promptinit; promptinit

# optionally define some options
SENPAI_SHOW_K8S=false
SENPAI_SHOW_AZURE=false

prompt senpai
```

[![asciicast](https://asciinema.org/a/thUXMMyOXY9E1VH0dEujypUw7.png)](https://asciinema.org/a/thUXMMyOXY9E1VH0dEujypUw7)

## ToDo
- Check if Git module is available before enabling
- ~~Add color scheme to white console~~
- ~~Add modules enable/disable through config file and/or env vars~~

## Changelog

### v0.6
- Fixed issues with Kubernetes context when KUBECONFIG is defined

### v0.5
- Added white color scheme
- Fixed color variables used across all functions

### v0.4
- Added timestamp
- Now AWS profile also checks `AWS_DEFAULT_PROFILE`

### v0.3
- Added customizable prompt options

### v0.2
- Added GCP support
- Added Azure Support

### v0.1
- Initial release


## License
MIT © Sergi Barroso

