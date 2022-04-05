# Nx completion plugin for Zsh

![demo](https://user-images.githubusercontent.com/8522558/111908149-67e8d780-8a58-11eb-9343-691f6d664163.gif)

## Install

Install the dependency:

```shell
apt install jq
```

> Note: `jq` is a lightweight command-line JSON processor, more info [here](https://stedolan.github.io/jq/).

### As an [Oh My ZSH!](https://github.com/robbyrussell/oh-my-zsh) custom plugin

Clone the repository into the custom plugins directory:

```shell
git clone git@github.com:jscutlery/nx-completion.git ~/.oh-my-zsh/custom/plugins/nx-completion
```

Then load it as a plugin in your `.zshrc`:

```shell
plugins+=(nx-completion)
```

### Manually

Clone this repository somewhere (`~/.nx-completion` for example):

```shell
git clone git@github.com:jscutlery/nx-completion.git ~/.nx-completion
```

Then source it in your `.zshrc`:

```shell
source ~/.nx-completion/nx-completion.plugin.zsh
```

## License

This project is MIT licensed.
