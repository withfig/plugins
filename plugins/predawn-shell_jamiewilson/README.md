# Predawn Shell 

Get [Predawn](https://github.com/jamiewilson/predawn) for iTerm, Terminal (special thanks to [@danielbayley](https://github.com/danielbayley)), HyperTerm along with a command-line prompt theme easily installed with Oh-my-zsh or Prezto.

![predawn-shell-iterm](http://i.imgur.com/lJ34FpJ.png)

## Installation

### [iTerm](http://iterm2.com/) 

1. Open Preferences — <kbd>Cmd</kbd> + <kbd>,</kbd>
1. Go to `Profiles` tab
1. Click on `Colors` tab of desired profile
1. Click the `Color Presets…` dropdown
1. Click `Import`
1. Select `Predawn.itermcolors`
1. Again, click the `Color Presets…` dropdown
1. Select `Predawn` from the list

---

### Terminal

1. Open Preferences — <kbd>Cmd</kbd> + <kbd>,</kbd>
1. Go to `Profiles` tab
1. Click the gear dropodown in the list of profiles
1. Click `Import…`
1. Select `Predawn.terminal`
1. Optionally set as `Default`

---

### [HyperTerm](https://hyperterm.org/)

1. Add `predawn-hyperterm` to the plugins array in `~/.hyperterm.js`

---

### [Oh-My-ZSH Prompt Theme](http://ohmyz.sh/)

1. Place `Predawn.zsh-theme` into `~/.oh-my-zsh/themes`
1. Open your `~/.zshrc` file 
1. Set your ZSH_THEME variable to "Predawn", i.e. `ZSH_THEME="Predawn"`
1. Reload your settings with `source ~/.zshrc`

---

### [ZSH Prezto Theme](https://github.com/sorin-ionescu/prezto)

1. Place `prompt_predawn_setup` into `~/.zprezto/modules/prompt/functions`
1. Try it out with `prompt predawn` or...
1. Configure it as your default with `zstyle ':prezto:module:prompt' theme 'predawn'` in `~/.zpreztorc`
1. Reload your shell with `source ~/.zshrc`

---

### [zplug](http://zplug.sh)

1. Add `zplug jamiewilson/predawn-shell, as:theme` [above `zplug load` in your `~/.zshrc`](https://github.com/zplug/zplug#usage)
1. `zplug install` to install your plugins and reload `~/.zshrc`

