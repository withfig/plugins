# sm-prompt
<p>
  <a href="https://github.com/blyndusk/sm-prompt/releases/latest">
    <img src="https://img.shields.io/github/release/blyndusk/sm-prompt.svg" alt="sm-prompt last release"/>
  </a>
  <img src="https://img.shields.io/github/languages/top/blyndusk/sm-prompt?color=5bb5bf" alt="sm-prompt top language"/>
  
  <a href="https://github.com/blyndusk/sm-prompt/stargazers" alt="sm-prompt stars">
    <img src="https://img.shields.io/github/stars/blyndusk/sm-prompt?color=7acd99"/>
  </a>
  <a href="https://github.com/blyndusk/sm-prompt/network/members" alt="sm-prompt forks">
    <img src="https://img.shields.io/github/forks/blyndusk/sm-prompt?color=75b05c"/>
  </a>
  <a href="https://github.com/blyndusk/sm-prompt/blob/master/LICENSE" alt="sm license">
    <img src="https://img.shields.io/github/license/blyndusk/sm-prompt.svg"/>
  </a>
</p>

⛓ **sm-prompt** is a **Simplistic** & **Minimalist** theme for **`Bash`** and **`Zsh`** prompts.

![sm-prompt](./docs/sm-prompt.gif)

> This theme better fit with **Fira Code** font.

- [sm-prompt](#sm-prompt)
  - [I - Install](#i---install)
    - [Bash](#bash)
    - [Zsh](#zsh)
    - [Oh My Zsh](#oh-my-zsh)
  - [II - License](#ii---license)

## I - Install

```bash
source ./install.sh
```

![install](./docs/install.gif)

This [script](https://github.com/blyndusk/sm-prompt/blob/master/install.sh) will:
- **select** your actual shell (`Bash|Zsh`) according to your **input**
- **copy** the theme file into your **user root** (`~`) or `Oh My Zsh` theme folder according to your **second input**
- **check** for a `.[ba|z]shrc` file to **source** the theme file
- **replace** your actual prompt theme with the **sm** one

### Bash

<a href="https://github.com/blyndusk/sm-prompt/blob/master/sm.bash-theme">
  <img src="https://img.shields.io/github/size/blyndusk/sm-prompt/sm.bash-theme?label=bash+theme+size" alt="bash theme size"/>
</a>

![install-bash](./docs/install-bash.png)

### Zsh

<a href="https://github.com/blyndusk/sm-prompt/blob/master/sm.zsh-theme">
  <img src="https://img.shields.io/github/size/blyndusk/sm-prompt/sm.zsh-theme?label=zsh+theme+size" alt="zsh theme size"/>
</a>

![install-zsh](./docs/install-zsh.png)

### Oh My Zsh

![install-omz](./docs/install-omz.png)

> Make sure to update the `$ZSH_THEME` variable in your `.zshrc` (`ZSH_THEME="sm"`)

## II - License

Under [MIT](https://github.com/blyndusk/sm-prompt/blob/master/LICENSE) license.
