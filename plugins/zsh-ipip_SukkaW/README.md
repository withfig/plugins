# zsh-ipip

[![Author](https://img.shields.io/badge/Author-Sukka-b68469.svg?style=flat-square)](https://skk.moe)
[![License](https://img.shields.io/github/license/sukkaw/zsh-ipip.svg?style=flat-square)](./LICENSE)

:nut_and_bolt: An [`oh-my-zsh`](https://ohmyz.sh/) plugin for IPIP.

## Installation

### oh-my-zsh

Firstly, clone this repository in `oh-my-zsh`'s plugins directory.

```bash
git clone https://github.com/sukkaw/zsh-ipip.git ~/.oh-my-zsh/custom/plugins/zsh-ipip
```

Secondly, activate the plugin in `~/.zshrc`. Enable it by adding `zsh-ipip` to the [plugins array](https://github.com/robbyrussell/oh-my-zsh/blob/master/templates/zshrc.zsh-template#L66).

```
plugins=(
    [plugins
     ...]
    zsh-ipip
)
```

### Antigen

[Antigen](https://github.com/zsh-users/antigen) is a zsh plugin manager, and it support `oh-my-zsh` plugin as well. You only need to add `antigen bundle sukkaw/zsh-ipip` to your `.zshrc` with your other bundle commands if you are using Antigen. Antigen will handle cloning the plugin for you automatically the next time you start zsh. You can also add the plugin to a running zsh with `antigen bundle sukkaw/zsh-ipip` for testing before adding it to your `.zshrc`.

----

Congratulations! Open a new terminal or run `source $HOME/.zshrc`.

## Usage

```bash
$ ipip 1.0.0.1

* 当前 IP        1.0.0.1
* 地理位置       CLOUDFLARE.COM
* 运营商         apnic.net

* ASN            AS13335
* CIDR           1.0.0.0/24
* ASN 组织       CLOUDFLARENET-Cloudflare,Inc.,US

* 该 IP 段为 IDC 机房使用
* 该 IP 段为 ANYCAST IP 段
```

```bash
$ ipip

# Your current IP and IP info
```

## Uninstallation

**If you install `zsh-ipip` with Antigen**, you need to remove `antigen bundle sukkaw/zsh-ipip` to disable the plugin.
**If you install `zsh-ipip` with oh-myzsh**, you need to remove `zsh-ipip` item from plugin array, then run `rm -rf ~/.oh-my-zsh/custom/plugins/zsh-ipip` to remove the plugin.

## Author

**zsh-ipip** © [Sukka](https://github.com/SukkaW), Released under the [MIT](https://github.com/SukkaW/zsh-ipip/blob/master/LICENSE) License.<br>
Authored and maintained by Sukka with help from contributors ([list](https://github.com/SukkaW/zsh-ipip/graphs/contributors)).

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)

