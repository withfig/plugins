Powerline theme for oh-my-zsh
=============================

The Powerline style prompt for oh-my-zsh.


REQUIREMENTS
------------

- Vim Powerline patched font: See [Powerline for vim](https://github.com/Lokaltog/vim-powerline.git) for more info.
- Z shell (zsh): See [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) for more info.

PREVIEW
-------

![powerline prompt](https://raw.github.com/KuoE0/Powerline-oh-my-zsh-theme/master/preview.png)


INSTALLATION
------------

**Manual / oh-my-zsh**

1. Clone the repository.

	```
	$ git clone https://github.com/KuoE0/oh-my-zsh-solarized-powerline-theme.git
	```

2. Create a symbolic link of solarized-powerline.zsh-theme in .oh-my-zsh/themes/.
	
	```
	$ ln -s $PWD/solarized-powerline.zsh-theme ~/.oh-my-zsh/themes
	```

3. Configure the theme in your **.zshrc** file :

	```
	ZSH_THEME="solarized-powerline"
	```

**Antigen**

```
antigen theme KuoE0/oh-my-zsh-solarized-powerline-theme solarized-powerline
```

See [Antigen](https://github.com/zsh-users/antigen) for more info.

CONFIGURATION
-------------

You can set following options in your .zshrc.

`ZSH_POWERLINE_SHOW_USER`
- **Display username.**
- options:
	- `true`
	- `false`
- default: `true`


`ZSH_POWERLINE_SHOW_IP`
- **Display IP address or host name.**
- options:
	- `true`
	- `false`
- default: `true`

`ZSH_POWERLINE_SHOW_TIME`
- **Display current time.**
- options:
	- `true`
	- `false`
- default: `true`

`ZSH_POWERLINE_SINGLE_LINE`
- **Use single line in prompt**
- options:
	- `true`
	- `false`
- default: `false`

`ZSH_POWERLINE_SHOW_GIT_STATUS`
- **Display git status of current repo. For a large git repo, the prompt will be very slow!**
- options:
	- `true`
	- `false`
- default: `true`

`ZSH_POWERLINE_SHOW_GIT_BRAHCH_ONLY`
- **Display branch name of current git repo. The priotity of this option is higher than `ZSH_POWERLINE_SHOW_GIT_STATUS`!**
- options:
	- `true`
	- `false`
- default: `false`

`ZSH_POWERLINE_SHOW_RETURN_CODE`
- **Display return code.**
- options:
	- `true`
	- `false`
- default: `true`

`ZSH_POWERLINE_SHOW_OS`
- **Display symbol of current OS.**
- options:
	- `true`
	- `false`
- default: `true`

`ZSH_POWERLINE_DIRECTORY_DEPTH`
- **The the depth of parant directories.**
- options:
	- integer > 0
- default: `2`

KNOWN ISSUES
------------

- In screen/tmux, the `%E` work not correctly. (doesn't highlight to the end of current line)



