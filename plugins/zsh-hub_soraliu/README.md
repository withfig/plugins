# zsh-hub

Github hub zsh plugin

# Prerequisites

- [hub](https://github.com/github/hub)

# Installation

```bash
git clone https://github.com/soraliu/zsh-hub.git $ZSH_CUSTOM/plugins/zsh-hub
```

```bash
# ~/.zshrc

plugins=(
  # ...
  zsh-hub
  # ...
)
```

# Usage

## `grebase` (rebase)

Find the ancestor, and squash commit.

```bash
git fetch origin # upstream
grebase
```

## `gupdate` (update issue)

Push to forked repo, and create a pull request.

```bash
# add label
gupdate -l lgtm
# asign to a user
gupdate -a username
```

## `gpr` (pull request)

Push to forked repo, and create a pull request.

```bash
gpr
# show the pr in browser
gpr -s
```

## `gct` (comment)

Comment the pr based on current branch

```bash
gct '/publish'

# multiple lines
gct '/publish
/hold'
```

## `gci` (ci-status)

Check the ci status of current pr

```bash
gci
```

