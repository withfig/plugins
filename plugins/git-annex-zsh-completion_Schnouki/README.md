# ZSH completion for git-annex

This compdef allows tab completion for most of the [git-annex][] commands.
See also [tips in the git-annex ikiwiki](http://git-annex.branchable.com/tips/ZSH_completion/).

# Install

To install it:

1. make sure your have Python 3 installed (as `python3` somewhere in your `$PATH`; tested with 3.4, should work with 3.2+)
2. get it from [GitHub](https://github.com/Schnouki/git-annex-zsh-completion)
3. copy `_git-annex` to somewhere in your `$fpath` (I use `$HOME/.config/zsh/completion`)
4. run `autoload -U path/to/_git-annex`
5. type `git annex <TAB>`

If you use [oh-my-zsh][] then just clone the repository inside your oh-my-zsh repo:

```Shell
git clone https://github.com/Schnouki/git-annex-zsh-completion.git ~/.oh-my-zsh/custom/plugins/git-annex
```

and enable it in your `.zshrc`:

```zsh
plugins+=(git-annex)
```

If you use [antigen][] then you could add the bundle and be done with:

```Shell
antigen bundle add Schnouki/git-annex-zsh-completion
```

[antigen]: http://antigen.sharats.me/
[git-annex]: http://git-annex.branchable.com/
[oh-my-zsh]: http://github.com/robbyrussell/oh-my-zsh

