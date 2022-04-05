# zsh-cargo-completion


![cargo add rand <tab>](cargoadd.png)

This plugin has all functionality of OMZ cargo completion but it also allows `cargo add/install <tab>` to complete remote crates from output of `cargo search`.

It also adds several cargo aliases.

```sh
alias co=cargo
alias cr='cargo run'
alias cl='cargo clean'
alias ccy='cargo clippy'
alias cb='cargo build --release'
alias ct='cargo test'
alias ca='cargo add'
alias ci='cargo install'
alias cfi='cargo fix'
alias cf='cargo fmt'
alias cfe='cargo fetch'
alias cpa='cargo package'
alias cs='cargo search'
```

## Install for Zinit
> `~/.zshrc`
```sh
source "$HOME/.zinit/bin/zinit.zsh"
zinit ice lucid nocompile
zinit load MenkeTechnologies/zsh-cargo-completion
```

## Install for Oh My Zsh

```sh
cd "$HOME/.oh-my-zsh/custom/plugins"  && git clone https://github.com/MenkeTechnologies/zsh-cargo-completion.git
```

Add `zsh-cargo-completion` to plugins array in ~/.zshrc

## General Install

```sh
git clone https://github.com/MenkeTechnologies/zsh-cargo-completion.git
```

source zsh-cargo-completion.plugin.zsh or add code to zshrc or any startup script

