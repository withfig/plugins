# javaVersions

`javaVersions` is a `oh-my-zsh` plugin that adds aliases to your zsh.

You can change between different java versions with a single command.

## Installation

1. Create a new directory in your `oh-my-zsh/custom/plugin` directory

```
mkdir ~/.oh-my-zsh/custom/plugins/javaVersions
```

2. Copy `javaVersions.plugin.zsh` file

```
cp ./javaVersions.plugin.zsh ~/.oh-my-zsh/custom/plugins/javaVersions
```

3. Enable the plugin by adding it to your `plugins` definition in `~/.zshrc`.

```
plugins=(... javaVersions)
```

4. Reset your terminal

## Usage

By default java8 is active. If you want to change the java version execute the command `java{versionNumber}`



| command | java version |
| ------- | ------------ |
| java8   | java 8       |
| java9   | java 9       |
| java10  | java 10      |
| java11  | java 11      |
| java12  | java 12      |


## More information about oh-my-zsh and oh-my-zsh plugins

https://github.com/robbyrussell/oh-my-zsh

https://github.com/robbyrussell/oh-my-zsh/wiki/Customization#overriding-and-adding-plugins

## Notes

You can run the same aliases without oz-my-zsh. You've to add the aliases to your shell configuration file `(.bashrc, .zshrc, etc)`

