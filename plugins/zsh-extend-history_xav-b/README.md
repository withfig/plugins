# Contextual shell history - Zsh Plugin

### Install

- Antigen: `antigen bundle xav-b/zsh-extend-history`
- ZPlug: `zplug "xav-b/zsh-extend-history"`
- oh-my-zsh:

```Shell
$ git clone https://github.com/xav-b/zsh-extend-history ~/.oh-my-zsh/custom/plugins/extend-history
```

And add `extend-history` to `plugins` in `.zshrc`.


### Configuration

```Zsh
# file to write history
# default to `$HOME/.zsh_extended_history`
export ZSH_EXTEND_HISTORY_FILE="/tmp/my-zsh.history"

# print history collected on stdout instead of file
export ZSH_EXTEND_HISTORY_DEBUG="true"
```


### Development

Just source the file everytime you test changes =)

Something like that can help: `tail -f $ZSH_EXTEND_HISTORY_FILE | ./stream.py`


### Ideas/Notes

- vim and other long-lasting commands is an issue for the start and end
  hooks (other commands will probably happen in the meantime). We should
  instead compute a unique id that the `end` can refer too, and use it
  to retrieve the start stored in a temporary place (/tmp/gi/{this-id}.cmd).

- the `end` command sometimes appear on a seperate line (most probably
  related)

- option to ignore "boring commands" (ls, cd, ...)
- command to nicely display in the terminal? (or put that in gi)
- session id
- Deduplicate
- Only search/display history per directory/git project

