## percol

**Maintainer:** [@robturtle](https://github.com/robturtle)

It provides two functionalities that allows you search history and resume
background jobs with interactively incremental searching utility powered by
percol.

### Usage

1. Use `Ctrl-R` to search the history.

  ![interactively search history](https://www.dropbox.com/s/2ke80q5uswz7sqf/percol.plugin1.gif?raw=1)

2. User `Ctrl-H` to search aliases

   ![](https://www.dropbox.com/s/kvl2lahk7untk64/percol_browse_aliases.gif?raw=1)

3. Use `Ctrl-T` to switch to another git branch

5. Use `Ctrl-Q` to resume background jobs.

  ![interactively resume background jobs](https://www.dropbox.com/s/u5t5l7jeznv06y8/percol.plugin2.gif?raw=1)

### Installation

0. [Install percol](https://github.com/mooz/percol) by running the following:

   ```
   pip install percol
   ```

1. Clone the repository into your custom folder. Assuming your custom folder is
   at `~/.oh-my-zsh/custom`

  ```
  mkdir -p ~/.oh-my-zsh/custom/plugins
  git clone https://github.com/robturtle/percol.plugin.zsh.git ~/.oh-my-zsh/custom/plugins/percol
  ```

2. Enable the plugin by adding it to your `plugins` definition in `~/.zshrc`.

  ```
  plugins=(percol)
  ```

3. Enable Emacs-like keyboard shortcuts
  ```
  mkdir -p ~/.percol.d
  touch ~/.percol.d/rc.py
  ```
  And copy-paste the contents into `~/.percol.d/rc.py`.
  ```python
  # file: ~/.percol.d/rc.py
  # Emacs like
  percol.import_keymap({
      "C-h" : lambda percol: percol.command.delete_backward_char(),
      "C-d" : lambda percol: percol.command.delete_forward_char(),
      "C-k" : lambda percol: percol.command.kill_end_of_line(),
      "C-y" : lambda percol: percol.command.yank(),
      "C-t" : lambda percol: percol.command.transpose_chars(),
      "C-a" : lambda percol: percol.command.beginning_of_line(),
      "C-e" : lambda percol: percol.command.end_of_line(),
      "C-b" : lambda percol: percol.command.backward_char(),
      "C-f" : lambda percol: percol.command.forward_char(),
      "M-f" : lambda percol: percol.command.forward_word(),
      "M-b" : lambda percol: percol.command.backward_word(),
      "M-d" : lambda percol: percol.command.delete_forward_word(),
      "M-h" : lambda percol: percol.command.delete_backward_word(),
      "C-n" : lambda percol: percol.command.select_next(),
      "C-p" : lambda percol: percol.command.select_previous(),
      "C-v" : lambda percol: percol.command.select_next_page(),
      "M-v" : lambda percol: percol.command.select_previous_page(),
      "M-<" : lambda percol: percol.command.select_top(),
      "M->" : lambda percol: percol.command.select_bottom(),
      "C-m" : lambda percol: percol.finish(),
      "C-j" : lambda percol: percol.finish(),
      "C-g" : lambda percol: percol.cancel(),
  })
  ```

### Upgrade

```
cd ~/.oh-my-zsh/custom/plugins/percol && git pull && cd -
```

