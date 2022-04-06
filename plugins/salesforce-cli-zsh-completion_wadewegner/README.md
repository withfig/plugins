# salesforce-cli-zsh-completion

Want auto-completion in your shell? Of course you do! You get it with this Zsh completion for the Salesforce CLI.

<img width="600" alt="sfdx-cli-automation" src="https://user-images.githubusercontent.com/746259/34641780-083a2224-f2be-11e7-840a-55833e674ef0.gif">

You also command argument completion.

<img width="600" alt="sfdx-cli-automation" src="https://user-images.githubusercontent.com/746259/34654565-87851aa8-f3b2-11e7-9745-83181d2dd234.gif">

This repo contains both the Zsh command completion for the Salesforce CLI and a script for generating it.

## Dependencies

- Salesforce CLI : [download](https://developer.salesforce.com/tools/sfdxcli)
- jq : [download](https://stedolan.github.io/jq/)

You only need `jq` if you plan to run the script to generate the completion file. If not, you only need the CLI. (But `jq` is pretty awesome, so you probably want it anyway.)

## Usage

Follow the following steps to use these Salesforce CLI completions in the Zsh.

First, clone the repo locally.

```
git clone git@github.com:wadewegner/salesforce-cli-zsh-completion.git
```

Update your `.zshrc` to include the following:

```
# add custom completion scripts
fpath=({YOURPATH}/salesforce-cli-zsh-completion $fpath)

# compsys initialization
autoload -U compinit
compinit
```

Close and open your terminal.

## Update the Zsh completion file

If you want to update the `_sfdx` completion file, run the following script:

```
./generate.sh
```

This will create a new `_sfdx` file.

Run the following command to reload the completion.

```
unfunction _sfdx && autoload -U _sfdx
```

Enjoy!

## Oh My Zsh

Users of [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) can import this auto-completion as a plugin. To install it, just clone this repository into the custom plugins folder.

```console
git clone git@github.com:wadewegner/salesforce-cli-zsh-completion.git ~/.oh-my-zsh/custom/plugins/salesforce-cli-zsh-completion
```

Enable it by editing `~/.zshrc`. Add `salesforce-cli-zsh-completion` to the list of extra plugins, like this:

```sh
# ~/.zshrc
plugins=(salesforce-cli-zsh-completion)
```

Reload your shell and enjoy.
