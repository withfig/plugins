vi-mode
=======
This plugin increase `vi-like` zsh functionality.

- Line cursor in insert mode
- Block cursor in normal and visual mode
- Mode indicator

<p align="center">
  <img src="screenshot.png" alt="preview">
</p>

Use `ESC` or `CTRL-[` to enter `Normal mode`.


History
-------

- `ctrl-p` : Previous command in history
- `ctrl-n` : Next command in history


Mode indicators
---------------

Mode are indicated by the right prompt when not defined by theme.
You can override the default by changing the corresponding variables:

`$INSERT_MODE_INDICATOR`  
`$NORMAL_MODE_INDICATOR`  
`$VISUAL_MODE_INDICATOR`  

> Example:  
> ```zsh
> NORMAL_MODE_INDICATOR="%{$FX[italic]$FG[201]%}NORMAL%{$FX[reset]%}"
> ```  
> Will display NORMAL in italic purple when in vicmd (normal) mode

Vim edition
-----------

- `ctrl-v`   : Edit current command line in Vim
- `v`        : Visual mode (works better with [zsh-vimode-visual](https://github.com/b4b4r07/zsh-vimode-visual))


Movement
--------

- `$`   : To the end of the line
- `^`   : To the first non-blank character of the line
- `0`   : To the first character of the line
- `w`   : [count] words forward
- `W`   : [count] WORDS forward
- `e`   : Forward to the end of word [count] inclusive
- `E`   : Forward to the end of WORD [count] inclusive
- `b`   : [count] words backward
- `B`   : [count] WORDS backward
- `t{char}`   : Till before [count]'th occurrence of {char} to the right
- `T{char}`   : Till before [count]'th occurrence of {char} to the left
- `f{char}`   : To [count]'th occurrence of {char} to the right
- `F{char}`   : To [count]'th occurrence of {char} to the left
- `;`   : Repeat latest f, t, F or T [count] times
- `,`   : Repeat latest f, t, F or T in opposite direction


Insertion
---------

- `i`   : Insert text before the cursor
- `I`   : Insert text before the first character in the line
- `a`   : Append text after the cursor
- `A`   : Append text at the end of the line
- `o`   : Insert new command line below the current one
- `O`   : Insert new command line above the current one


Delete and Insert
-----------------

- `ctrl-h`      : While in *Insert mode*: delete character before the cursor
- `ctrl-w`      : While in *Insert mode*: delete word before the cursor
- `d{motion}`   : Delete text that {motion} moves over
- `dd`          : Delete line
- `D`           : Delete characters under the cursor until the end of the line
- `c{motion}`   : Delete {motion} text and start insert
- `cc`          : Delete line and start insert
- `C`           : Delete to the end of the line and start insert
- `r{char}`     : Replace the character under the cursor with {char}
- `R`           : Enter replace mode: Each character replaces existing one
- `x`           : Delete [count] characters under and after the cursor
- `X`           : Delete [count] characters before the cursor




# Installation

### Zplug

1. Add this to your [zplug](https://github.com/zplug/zplug) section

```sh
zplug "nyquase/vi-mode"
zplug "b4b4r07/zsh-vimode-visual", defer:3
```

My recommended zplug plugins
```sh
zplug "nyquase/vi-mode"
zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-completions"
zplug "zdharma/fast-syntax-highlighting", defer:2
zplug "b4b4r07/zsh-vimode-visual", defer:3
```

### Manual (Git Clone)

1. Clone this repository somewhere on your machine.
  ```sh
  git clone https://github.com/nyquase/vi-mode ~/.zsh/vi-mode
  ```

2. Add the following to your `.zshrc`:
  ```sh
  source ~/.zsh/vi-mode/vi-mode.zsh
  ```

3. Start a new terminal session.


### Oh My Zsh

1. Clone this repository into `ZSH_CUSTOM/plugins` (by default `~/.oh-my-zsh/custom/plugins`)

  ```sh
  # If you want better visual mode
  git clone https://github.com/b4b4r07/zsh-vimode-visual ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-vimode-visual

  git clone https://github.com/nyquase/vi-mode ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/vi-mode
  ```

2. Add the plugin to the list of plugins for Oh My Zsh to load (inside `.zshrc`):
  ```sh
  plugins=(vi-mode zsh-vimode-visual)
  ```
  This will override the default Oh My Zsh vi-mode if you were using it

3. Start a new terminal session.

