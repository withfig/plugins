# .oh-my-zsh Plugin for [Ansible](https://www.ansible.com/)

## Installation

Download the plugin into the custom plugin folder of oh-my-zsh
```shell
cd $ZSH/custom/plugins
git clone https://github.com/sparsick/ansible-zsh ansible
```
Activate the plugin. Add `ansible` to the `plugins` list in the file `.zshrc`
```shell
plugins=(git git-extras history mvn web-search ansible)
```

## Usage

### Aliases

| Alias                | Command  |
|----------------------|--------------|
|a |ansible|
|ap |ansible-playbook|
|al |ansible-pull|
|avc |ansible-vault create|
|ave |ansible-vault edit|
|avr |ansible-vault rekey|
|avenc|ansible-vault encrypt|
|avdec|ansible-vault decrypt|
|avv|ansible-vault view|
|aga|ansible-galaxy|
|agad|ansible-galaxy delete|
|agai|ansible-galaxy install|
|agaim|ansible-galaxy import|
|againf|ansible-galaxy info|
|agal|ansible-galaxy list|
|agalog|ansible-galaxy login|
|agar|ansible-galaxy remove|
|agas|ansible-galaxy search|

