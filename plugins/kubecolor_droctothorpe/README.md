# Kubecolor

Kubecolor is a `bash` function that colorizes the output of `kubectl get events -w`.

## Installation

### Bash / Fish / Manual
If you're using Bash or Fish:

```bash
mkdir ~/.kubecolor
cd $_
git clone https://github.com/droctothorpe/kubecolor.git 
echo "source ~/.kubecolor/kubecolor/kubecolor.bash" >> ~/.bash_profile # (or ~/.bashrc)
source ~/.bash_profile # (or ~/.bashrc)
```

### Antigen

If you're using [Antigen](https://github.com/zsh-users/antigen):

1. Add `antigen bundle droctothorpe/kubecolor.git` to your `.zshrc` where you've listed your other plugins.
2. Close and reopen your Terminal/iTerm window to **refresh context** and use the plugin. Alternatively, you can run `antigen bundle droctothorpe/kubecolor.git` in a running shell to have `antigen` load the new plugin.

### Zgen

If you're using [zgen](https://github.com/tarjoilija/zgen):

1. Add `zgen load droctothorpe/kubecolor.git` to your `.zshrc` along with your other `zgen load` commands.
2. `zgen reset && zgen save`

## Usage

Now you can invoke kubecolor with the `events` command.

Enjoy the simpler, much more readable `kubectl get events` output. 

Kudos to [Francois-Guillaume Ribreau](https://blog.fgribreau.com/2018/05/pretty-print-kubernetes-events-kubectl.html) for the go-template code. 

