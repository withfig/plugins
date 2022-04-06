# ZSH Terminal.app Integration Plug-in

A ZSH plug-in for integrating with the new El Capitan Terminal.app window title and tab escape codes. The plug-in injects Emoji into the window title and tabs based on the currently executing process.

![Terminal.app Screenshot](/doc/screen-terminal-app-0.png)

## Installation

### Manual Install

Add the following snippet to your `~/.zshrc`

```zsh
# Terminal.app specific title hooks
source ~/.zsh/terminal-app.zsh/terminal-app.plugin.zsh
```

## Currently Used Icons/Emoji

### Shell Command Emoji

| Emoji  | Command(s)          |
|:------:|:--------------------|
| 🔎     |  ack, grep          |
| 🏹     |  bower              |
| 🍺     |  brew               |
| 📦     |  budle, budler, bunzip, bzip, gunzip, gzip, tar, unzip, zip  |
| ☕      |  coffee, java, node |
| 🏷     |  cvs, git, hg, svn  |
| 🐽     |  grunt              |
| 🍹     |  gulp               |
| 💉     |  jekyll             |
| 👓     |  less, more, tail   |
| 🛠     |  make               |
| 📚     |  man                |
| 🐬     |  mysql              |
| 🐘     |  psql               |
| 🛤     |  rails              |
| 🗑     |  rm                 |
| 🖥     |  ssh                |

✨ [Suggest additional Emoji to add to the database!](https://github.com/the8/terminal-app.zsh/issues/new?labels=new+command+request&title=Add+shell+'<command>'+linked+to+emoji+'<emoji>') ✨
  
### Placeholder Emoji

| Emoji | Command(s) | Emoji | Command(s) |
|:-----:|:-----------|:-----:|:-----------|
| 🇦 |  _A | 🇳 |  _N |
| 🇧 |  _B | 🇴 |  _O |
| 🇨 |  _C | 🇵 |  _P |
| 🇩 |  _D | 🇶 |  _Q |
| 🇪 |  _E | 🇷 |  _R |
| 🇫 |  _F | 🇸 |  _S |
| 🇬 |  _G | 🇹 |  _T |
| 🇭 |  _H | 🇺 |  _U |
| 🇮 |  _I | 🇻 |  _V |
| 🇯 |  _J | 🇼 |  _W |
| 🇰 |  _K | 🇽 |  _X |
| 🇱 |  _L | 🇾 |  _Y |
| 🇲 |  _M | 🇿 |  _Z |
| ⁉  | __  |    |     |

## Terminal.app and iTerm2 Color Profiles

Take a look at my [Retro styled ANSi BBS color profiles](https://github.com/the8/ice.terminal) for both [Terminal.app](https://github.com/the8/ice.terminal/blob/master/ice.terminal) and [iTerm2](https://github.com/the8/ice.terminal/blob/master/ice.itermcolors).

![iCE.terminal Screenshot](/doc/screen-ice-pro-0.png)




