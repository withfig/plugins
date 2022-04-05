# Terraform ZSH Plugin

Plugin for Terraform, extending original oh-my-zsh plugin with aliases and
autocompletion.

Terraform is a tool from Hashicorp for managing infrastructure safely and
efficiently.

# Requirements

- [Terraform](https://terraform.io/)

# Installation

- [Antigen](#antigen)
- [Oh My Zsh](#oh-my-zsh)
- [Manual](#manual-git-clone)

## Antigen

1. Add the following to your `.zshrc`:

   ```sh
   antigen bundle macunha1/zsh-terraform
   ```

2. Start a new terminal session.

## Oh My Zsh

1. Clone this repository into `$ZSH_CUSTOM/plugins` (by default
   `~/.oh-my-zsh/custom/plugins`)

   ```sh
   git clone https://github.com/macunha1/zsh-terraform \
       ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/terraform
   ```

2. Add the plugin to the list of plugins for Oh My Zsh to load (inside
   `~/.zshrc`):

   ```sh
   plugins=(terraform)
   ```

3. Start a new terminal session.

## Manual (Git Clone)

1. Clone this repository somewhere on your machine. This guide will assume
   `~/.zsh/zsh-terraform`.

   ```sh
   git clone https://github.com/macunha1/zsh-terraform ~/.zsh/zsh-terraform
   ```

2. Add the following to your `.zshrc`:

   ```sh
   source ~/.zsh/zsh-terraform/terraform.zsh
   ```

3. Start a new terminal session.

### Features

- Terraform ZSH autocompletion
- Terraform aliases

### TODO

- Auto-detection of Terraform commands (overwriting [\_terraform](_terraform))

