# Git prune plugin
This plugin allows you to delete all branches that are already merged in your local repository or/and that were merged in your remote repository (/origin)

## Instalation

### Antigen

If you use the [antigen](https://github.com/zsh-users/antigen) framework, add `antigen bundle diazod/git-prune` to your .zshrc file. Antigen will handle cloning the plugin for you automatically the next time you start zsh. You can also add the plugin to a running zsh with `antigen bundle diazod/git-prune` for testing before adding it to your `.zshrc`.

### Oh-My-Zsh

1. You first must install oh-my-zsh

	https://github.com/robbyrussell/oh-my-zsh

2. Download or clone git-prune and copy/move to the directory ~/.oh-my-zsh/plugins

3. Edit the the following lines in the file .zshrc

```bash
	# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
	# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
	# Example format: plugins=(rails git textmate ruby lighthouse)
	# Add wisely, as too many plugins slow down shell startup.

	plugins=(git git-prune)
```

### Zgen

If you're using the [zgen](https://github.com/tarjoilija/zgen) framework, add `zgen load diazod/git-prune` to your .zshrc with your other zgen load commands.

### Zplugin

If you're using the [zplugin](https://github.com/zdharma/zplugin) framework, add `zplugin light diazod/git-prune` to your .zshrc with your other `zplugin light` commands.

### EXAMPLE

You can perform the removal of the merged local branches by just writing the command:

```bash
gprune
```

### SYNOPSIS


```bash
gprune [ -r | --remote | -b | --both ] <branch-name>
```

### OPTIONS

```
<branch-name>
	This is the base branch which the plugin will use to compare the merged branches, for example:
	    given the branches "master", "develop" and "example", you are currently in the branch "develop" and the branch named "example" is already merged into it but not into "master" the plugin will delete the branch "example".

-r, --remote
	Defines that only remote branches which were merged should be removed from the repository

-b, --both
	Defines that both remote and local branches which were merged should be removed from the repository
```

