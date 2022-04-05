# ZSH send plugin

The following zsh plugin enables a really useful git shortcut:

```bash
send 'my first commit'
```

will get translated to

```bash
git add (everything in current git repository)
git commit -m 'my first commit'
git pull origin (the current git branch)
git push origin (the current git branch)
```

That is, by writing `send`, we are able to add our changes, submit a commit,
pull from upstream (by default, the remote `origin`) and then push upstream.
Frequently, developers write out this workflow in full hundreds of times a
day, so this is a useful time-saving technique.

## Installation

### [Antigen](github.com/zsh-users/antigen)

If you're using [Antigen](github.com/zsh-users/antigen), just add `antigen bundle robertzk/send.zsh`
to your `.zshrc` file where you're loading your other zsh plugins.

### Oh-My-Zsh

If you're using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), you can do:

1. `git clone git@github.com:robertzk/send.zsh.git ~/.oh-my-zsh/custom/plugins/send`
2. `echo "plugins+=(send)" >> ~/.zshrc`

(Alternatively, you can add the `send` plugin to the `plugins=(...)` local in your `~/.zshrc` manually.)

### [Zgen](tarjoilija/zgen)

If you're using [Zgen](tarjoilija/zgen), add `zgen load robertzk/send.zsh`
to your `.zshrc` file where you're loading your other zsh plugins.

### Bash users

If you use the non-recommended alternative, bash, you can install this directly to your `~/.bash_profile`:

```bash
curl -s https://raw.githubusercontent.com/robertzk/send.zsh/master/send.plugin.zsh >> ~/.bash_profile
```

