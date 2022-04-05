# NOTE

The plugin was fully rewriten and based on a default oh-my-zsh plugin
and was included to the default oh-my-zsh bundle (see [#1490](https://github.com/robbyrussell/oh-my-zsh/pull/1490)).

# SVN-n

Improved version of SVN plugin provided with the [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh).
## Install 
* `oh-my-zsh` - `git clone https://github.com/khrt/svn-n-zsh-plugin.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/svn-n` and add `svn-n` to `$plugins` on `~/.zshrc`

### Example

For `agnoster` zsh theme:

```zsh
prompt_svn() {

  local PL_BRANCH_CHAR
  () {
    local LC_ALL="" LC_CTYPE="en_US.UTF-8"
    PL_BRANCH_CHAR=$'\ue0a0'         # 
  }
  if svn_is_inside; then
    ZSH_THEME_SVN_PROMPT_DIRTY='±'
    local ref dirty
    if svn_parse_dirty; then
      dirty=$ZSH_THEME_SVN_PROMPT_DIRTY
      prompt_segment yellow black
    else
      prompt_segment green black
    fi
    echo -n "$PL_BRANCH_CHAR $(svn_branch_name) $(svn_rev)$dirty"
  fi

}

...

build_prompt() {
  RETVAL=$?
  prompt_status
  prompt_context
  prompt_dir
  prompt_git
  prompt_svn
  prompt_end
}
```

====
Based on `oh-my-zsh/plugins/svn.plugin.zsh`.

