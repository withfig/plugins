<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true#gh-light-mode-only"/>
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBannerInverted.png?raw=true#gh-dark-mode-only"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-public%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![All-Contributors](https://img.shields.io/github/contributors/withfig/plugins)](#Contributors)
![Discord](https://img.shields.io/discord/837809111248535583?color=768ad4&label=discord)
[![Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_plugins) helps you discover, install and configure shell plugins.** 

<br/>

## ⚡️ Installation

* **[Homebrew](https://brew.sh)**: `brew install fig`
* **Manual**: Download the macOS app at [fig.io](https://fig.io/download)

<br/>

## 👋 What are "Plugins"?

A plugin is a _declarative_ schema that defines how shell plugins are installed and configured using the Fig Plugin Store.

<br/>


## 😎 Contribute your first plugin in < 3 minutes

**Prerequisites:**

- Download Fig for macOS
- Node and NPM (or Yarn).

<br/>

**Steps**

1. Click [here](https://GitHub.com/withfig/plugins/fork/) to fork this repo.

2. Clone your forked repo and create a plugin

```bash
# Replace `YOUR_GITHUB_USERNAME` with your own github username
git clone https://github.com/YOUR_GITHUB_USERNAME/plugins.git fig-plugins
cd fig-plugins

# Add withfig/plugins as a remote
git remote add upstream https://github.com/withfig/plugins.git

# Install packages
npm install
```

3. See the details on how to create a basic plugin [here](docs/plugins_schema.md)

<br/>

## 📦 Other available package.json commands

```bash

# Typecheck all plugins in the src/ folder
npm test

# Compile typescripts specs from src/ folder to dist/ folder
npm run build

```

## 🔥 Contributions
We would love contributions for:
* new shell plugins
* errors with existing plugins (e.g. wrong sourced file, outdated config, etc)
* new configs so plugins can be easily configured

If you aren't able to contribute, please feel free to open an [issue](https://github.com/withfig/plugins/issues/new/choose).

## 😊 Need Help?

<p align="center">
    Join our community
<br/>
<a href="https://fig.io/community">
    <img src="http://fig.io/icons/discord-logo-square.png" width="80px" height="80px" /> 
</a>
</p>

## 🙋‍♀️ FAQ

#### What shells do plugins work with?

Currently plugins support Bash, ZSH, and Fish. If there is a shell we don't support please create an feature request at [withfig/fig](https://github.com/withfig/fig)

#### How do plugins work?

When you install Fig there are lines added to your shell config files that add the plugins in when your shell starts.

#### Do Plugins work on Windows or Linux?

Currently, Plugins is only available on MacOS, there is a beta for Linux coming soon.

#### How can I download Fig?

Run `brew install fig` or by downloading the app at [fig.io/download](https://fig.io/download).

#### Did we miss something?

Get in touch at hello@fig.io or chat with us in [Discord](https://fig.io/community).

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/plugins/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=withfig/plugins" />
</a>
<!--  https://contrib.rocks -->

