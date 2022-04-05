# firebase-zsh :fire: 

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

firebase-zsh is a configurable plugin for Zsh to display the current working project or project alias when in a Firebase project directory or subdirectory. Never push to production accidentally again! 

Part of the [Awesome zsh plugins collection!](https://github.com/unixorn/awesome-zsh-plugins)

![](https://i.imgur.com/wGwuTH7.png)

## Installation

Clone the repository into your oh-my-zsh plugin folder:

`git clone https://github.com/seqi/firebase-zsh ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/firebase`

Then add it to your list of plugins in your `~/.zshrc`

`plugins=(git firebase)`

Finally, add the plugin output to your prompt, by opening your theme and adding the firebase project.

For example, 

`PROMPT='%{$fg[cyan]%}%n%{$reset_color%}:$(git_prompt_info) %(!.#.$) '`

becomes

`PROMPT='%{$fg[cyan]%}%n%{$reset_color%}:$(firebase_project) $(git_prompt_info)%(!.#.$) '`

Restart Zsh for the changes to take effect.

## Configuration

firebase-zsh has a few customisation options to get it to fit with whatever theme you are using. These can be configured through environment variables. These options are:

### `FIREBASE_ZSH_TEXT`
Configures the font style of the text.

Options:
- `bold` - makes the text bold

Defaults to **non-bold**

### `FIREBASE_ZSH_ICON`
Whether or not to show the 🔥 icon.

Options:
- `true`

Defaults to **false**

### `FIREBASE_ZSH_STYLE`
The format of the text itself to help match with your current zsh theme.

Options:
- `plain`: output as `my-firebase-project`
- `round`: output as `(my-firebase-project)`
- `square`: output as `[my-firebase-project]`
- `prefix`: output as `fb:my-firebase-project`
- `prefix-round`: output as `fb:(my-firebase-project)`
- `prefix-square`: output as `fb:[my-firebase-project]`

Defaults to **round**

### `FIREBASE_ZSH_TRAILING_SPACE`
Adds a trailing space to the output.

### `FIREBASE_ZSH_LEADING_SPACE`
Adds a leading space to the output.

## Contributing

Changes are welcomed. If you have an issue, please feel free to raise it in the issues section. If you wish to make a contribution, please create a corresponding issue. 

## License 
[MIT](https://choosealicense.com/licenses/mit/)

