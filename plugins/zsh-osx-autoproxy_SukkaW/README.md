<!--
[![Author](https://img.shields.io/badge/Author-Sukka-b68469.svg?style=flat-square)](https://skk.moe)
[![License](https://img.shields.io/github/license/sukkaw/zsh-osx-autoproxy.svg?style=flat-square)](./LICENSE)

:nut_and_bolt: An [`oh-my-zsh`](https://ohmyz.sh/) plugin that configures proxy environment variables based on macOS's system preferences automatically.
-->
## Usage

After install the plugin and have proxy configured in `System Prefrences`, start a new terminal session and following environment variables will be set (if applicable):

- `http_proxy`
- `https_proxy`
- `ftp_proxy`
- `all_proxy`

## Uninstallation

**If you install `zsh-osx-autoproxy` with Antigen**, you need to remove `antigen bundle sukkaw/zsh-osx-autoproxy` to disable the plugin.
**If you install `zsh-osx-autoproxy` with oh-myzsh**, you need to remove `zsh-osx-autoproxy` item from plugin array, then `rm -rf ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-osx-autoproxy` to remove the plugin.

## Author

**zsh-osx-autoproxy** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Sukka with help from contributors ([list](https://github.com/SukkaW/zsh-osx-autoproxy/graphs/contributors)).

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)

