> Zsh plugin for installing, updating and loading `nvm`

[`nvm`](https://github.com/nvm-sh/nvm) is an awesome tool but it can be kind of a pain to install and keep up to date. This zsh plugin allows you to quickly setup `nvm` once, save it in your dotfiles, then never worry about it again.

The plugin will install the latest stable release of `nvm` if you don't already have it, and then automatically `source` it for you. You can upgrade `nvm` to the latest version whenever you want without losing your installed `node` versions by running `nvm upgrade`.

Although this is written as a zsh plugin, it also works with bash if you follow the [manual installation instructions](#manually).

## Usage

Once the plugin's installed `nvm` will be available. You'll probably want to load this as one of your first plugins so `node`/`npm` is available for any other plugins that may require them.

`zsh-nvm` also wraps `nvm` in some additional functionality.

### Upgrade

If you want to upgrade to the latest release of `nvm`:

```shell
% nvm upgrade
Installed version is v0.31.0
Checking latest version of nvm...
Updating to v0.31.3...
Previous HEAD position was 2176894... v0.31.0
HEAD is now at 56417f8... v0.31.3
```

### Revert

If an upgrade breaks something don't worry, reverting back to the previously installed version is simple:

```shell
% nvm revert
Installed version is v0.31.3
Reverting to v0.31.0...
Previous HEAD position was 56417f8... v0.31.3
HEAD is now at 2176894... v0.31.0
```

### Install

You can install the latest Node.js nightlies or release candidates with `nvm install nightly|rc`. Aliases will automatically be created so you can easily `nvm use nightly|rc` in the future:

```
% nvm install rc
Downloading and installing node v8.0.0-rc.1...
Downloading https://nodejs.org/download/rc//v8.0.0-rc.1/node-v8.0.0-rc.1-darwin-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v8.0.0-rc.1 (npm v5.0.0-beta.56)
rc -> v8.0.0-rc.1
Clearing mirror cache...
Done!
```

> **Note:** This is a bit of a hack and leaving rc|nightly versions installed may break nvm when it eventually supports them itself. It's recommended that you don't leave the these versions of Node.js installed. Install them, test/play with them and then uninstall them when you're done.

## Configuration

See the **Configuration** tab

## Related

[zsh-better-npm-completion](https://github.com/lukechilds/zsh-better-npm-completion) - Better completion for npm