# zsh-apple-touchbar

Make your touchbar more powerful.

![preview](./preview.gif)

## Requirements

* iTerm2 3.1 or later
* zsh
* ruby 2.3.4 or later (only if you want automatic generation)

**In iterm2:** Go to `View -> Customize Tool Bar...` and drag & drop the `Fn` module

## Customization

### Automatic

You can define simple commands for FN keys in `config.yml` file. 

#### Structure

File should have two base keys:
1. `default_view` - default view to show.
2. `views` - list of defined views.

`views` section contains views you want to show. **Key is a view name.**

Under view name key you should define next keys:
1. `text` -  text that will show on touchbar key.
2. `command` or `view` - `command` means executing some command that under is this key and `view` means show view that is under this key
3. `back` - under this key should be a view name that will be shown after executing some command.

#### Example

```yml
default_view: first
views:
  first:
    1:
      text: 👉 pwd
      command: pwd |tr -d "\\n" |pbcopy
    2:
      text: second view
      view: second
    3:
      text: third view
      view: third
  second:
    1:
      text: 👈 back
      view: first
    2:
      text: current path
      command: pwd
    back: first
  third:
    1:
      text: 👈 back
      view: first
    2:
      text: ls
      command: ls -la
```

For generating view from `config.yml` file go to its folder:

```sh
cd $ZSH_CUSTOM/plugins/zsh-apple-touchbar
```

and run `generate.rb` file:

```sh
ruby generate.rb
```

### Custom
If you need more complicated logic you can rewrite `zsh-apple-touchbar.zsh` file on your own.

#### View functions
For each `view` you need to define separate function that will contain keys creation. E.G.

```bash
function first_view() {
  remove_and_unbind_keys

  set_state 'first'

  create_key 1 '👉 pwd' 'pwd |tr -d "\\n" |pbcopy' '-s'
  create_key 2 'second view' 'second_view'
}

function second_view() {
  remove_and_unbind_keys

  set_state 'second'

  create_key 1 '👈 back' 'first_view'
  create_key 2 'current path' 'pwd' '-s'

  set_state 'first'
}
```

In every function first, you need to remove and unbind old keys with `remove_and_unbind_keys` function.

Then you need to set a state (`state` variable define which view to show after reinitialization) with `set_state` function.

After that, you can create keys for this view with `create_key` function.

And after keys part you can set new state (if you want to show some view after executing key command).

#### Keys creation
Keys creates with `create_key` function

This function accept 4 arguments:
1. number of key (from 1 to 12)
2. key text
3. `command` or `view`
4. bind option (`-s` if third argument isn't a view, nothing if it is)

#### Init widgets
For calling views in main function you need to init widgets for every view function.

```bash
zle -N first
zle -N second
```

#### Main function
Here you need to define which view to show for every state.

```bash
precmd_apple_touchbar() {
  case $state in
    first) first_view ;;
    second) second_view ;;
  esac
}
```

#### Full example
```bash
source ${0:A:h}/functions.zsh

set_state 'first'

function first_view() {
  remove_and_unbind_keys

  set_state 'first'

  create_key 1 '👉 pwd' 'pwd |tr -d "\\n" |pbcopy' '-s'
  create_key 2 'second view' 'second_view'
}

function second_view() {
  remove_and_unbind_keys

  set_state 'second'

  create_key 1 '👈 back' 'first_view'
  create_key 2 'current path' 'pwd' '-s'

  set_state 'first'
}

zle -N first_view
zle -N second_view

precmd_apple_touchbar() {
  case $state in
    first) first_view ;;
    second) second_view ;;
  esac
}

autoload -Uz add-zsh-hook

add-zsh-hook precmd precmd_apple_touchbar
```

