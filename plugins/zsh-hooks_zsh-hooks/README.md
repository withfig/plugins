ZSH Hooks
=========

Usage
-----

```sh
# Define a new hook that can be added to
hooks-define-hook <hook_variable_name>

# Run all functions added to the hook
hooks-run-hook <hook_variable_name>

# adds function to hook
#
# Options:
#   -d    remove from hook
#   -D    remove with pattern
#
# Everything else accepted by add-zsh-hook works... because it's the same
hooks-add-hook [ops] <hook_variable_name> <function>
```

As a more concrete example:

    my-finish-function(){echo "zle line finished"}
    hooks-add-hook zle_line_finish_hook my-finish-function

Note how `_hook` is appended to the function name, and all `-` characters are replaced with `_`.

To define custom hooks, do something like this:

    hooks-define-hook myhook
    myfunc(){
      echo running myfunc
    }
    hooks-add-hook myhook_hook myfunc
    # then in whatever function you want the hook to run:
    hooks-run-hook myhook_hook

Why is `_hook` appended to the name?  Because I clearly wasn't thinking straight when I made that API.

What??
------

That's right. `hooks-add-hook` is shamelessly taken from `add-zsh-hook`, and modified to be able to run on user defined hooks.

**Why is this important?**

Because ZSH has defined certain magic functions such as `zle-line-init` and `zle-keymap-select` that, if defined are run, but which can only have one definition.

**The answer:** define it to be a function that simply runs a hook.

So this plugin provides:

- `zle_line_init_hook` - these functions run on line init!
- `zle_keymap_select_hook` - these functions run when you switch your keymap!
- similar to the previous two, all of the other special functions documented [here](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Special-Widgets), except the history one, due to a bug.
- `$ZSH_CUR_KEYMAP` - this variable is set on line init/keymap change!

Why?
----

Plugin authors might want to use this functionality, but if they do it will conflict with what end-users do. This can solve that problem. Basically this is made to be a dependency for other plugins.

Install
-------

#### [zinit](https://github.com/zdharma/zinit)

    zinit load zsh-hooks/zsh-hooks

#### [zgen](https://github.com/tarjoilija/zgen)

    zgen load zsh-hooks/zsh-hooks

#### [zplug](https://github.com/zplug/zplug)

    zplug zsh-hooks/zsh-hooks

#### [antigen](https://github.com/zsh-users/antigen)

    antigen bundle zsh-hooks/zsh-hooks

