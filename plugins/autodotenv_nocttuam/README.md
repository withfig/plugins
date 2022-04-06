# autodotenv

autodotenv is a Zsh plugin inspired in [dotenv plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/dotenv)

It ask if you want load your project ENV variables from `.env` file when you `cd` into project root directory.

This plugin is

## Installation

First clone project in zsh plugins folder

```sh
git clone $ZSH/custom/plugins
```

And add the plugin to your `.zshrc`:

```sh
plugins=(... autodotenv)
```

## Usage

Create `.env` file inside your project root directory and put your ENV variables there.

For example:
```sh
export AWS_S3_TOKEN=d84a83539134f28f412c652b09f9f98eff96c9a
export SECRET_KEY=7c6c72d959416d5aa368a409362ec6e2ac90d7f
export MONGO_URI=mongodb://127.0.0.1:27017
export PORT=3001
```
`export` is optional. This format works as well:
```sh
AWS_S3_TOKEN=d84a83539134f28f412c652b09f9f98eff96c9a
SECRET_KEY=7c6c72d959416d5aa368a409362ec6e2ac90d7f
MONGO_URI=mongodb://127.0.0.1:27017
PORT=3001
```
You can even mix both formats, although it's probably a bad idea.

## Version Control

**It's strongly recommended to add `.env` file to `.gitignore`**, because usually it contains sensitive information such as your credentials, secret keys, passwords etc. You don't want to commit this file, it's supposed to be local only.

## Disclaimer

This is plugin is a fork of the **dotenv** Zsh plugin. Is a simple project with optional .env load.

