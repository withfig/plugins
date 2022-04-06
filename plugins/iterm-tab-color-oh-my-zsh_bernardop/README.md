# Oh My Zsh Plugin for Setting iTerm2 Custom Tab Colors

## Installation

```
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/bernardop/iterm-tab-color-oh-my-zsh.git iterm-tab-color
```

Enable it by adding _iterm-tab-color_ to your plugins array in `$HOME/.zshrc`

```
plugins=(git iterm-tab-color)
```

## Usage

### Explicitly using the command

After adding it to your plugins and restarting your current terminal you'll have a new alias available `tc`

#### Passing separate Red, Green, Blue values

```
tc 255 198 0
```

#### Passing a Hex value

```
tc '#0078ae`
```

\- or -

```
tc 0078ae
```

### Set tab color based on current working directory or current command

You can modify the `.tc-config` file located in `~/.oh-my-zsh/custom/plugins/iterm-tab-color` and add `directory=hexValue` or `command=hexValue` pairs to automatically set the color of your tab to `hexValue` when your current working directory matches `directory` or the current executing command matches `command` (you can use regular expressions)

#### Example `.tc-config` file

```
/Users/me/projects/personal*=#065535
/Users/me/projects/work*=#3399ff
npm*=#CB3837
brew*=#BE862D
```

