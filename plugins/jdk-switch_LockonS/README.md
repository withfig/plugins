## jdk-switch
A zsh plugin for quickly switching between different jdk versions, and the jdk status won't be restored after reloading the shell. **Please notice currently this plugin only works on macOS**. 

### Install

1. Clone this repository in oh-my-zsh's plugins directory
	
	```sh
	git clone https://github.com/LockonS/jdk-switch.git $ZSH/custom/plugins/jdk-switch
	```
	
2. Enable the plugin by adding `jdk-switch` in `plugins` in your `~/.zshrc`

	```sh
	plugins=( [plugins...] jdk-switch)
	```
	
3. Usage
	
	```sh
	# use jdkswitch to switch between different jdk versions
	# switch to jdk 8
	$ jdkswitch 1.8
	# or
	$ jdkswitch 8
	
	# check activating jdk
	$ jdkstatus
	```
	
	
#### Notice

1. This plugin works as a tiny tool to help you switch between different jdk versions by writing the jdk version you are currently using to a file and **reloading the shell itself**, so the setting would not be affected if you reload your shell and no additional useless part would show up in `PATH`. And that's also the the sole purpose of developing this plugin. 

2. This plugin manages the environment variable like `PATH`, `$JAVA_HOME` and `$CLASS_PATH`, so be cautious while changing these variables in your `~/.zshrc` or anywhere else, especially when adding settings about configuring the java environment which has something to do with any of these variables, as the plugin setting might be overridden by your own setting.
	
	

