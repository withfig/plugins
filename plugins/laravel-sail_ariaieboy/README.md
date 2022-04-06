# laravel-sail
## Installation
1. you must install oh my zsh + git to use this plugin
2. after installing git and Oh My Zsh run command below
```
 git clone https://github.com/ariaieboy/laravel-sail ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/laravel-sail
```

3. now edit zsh config file located in ```~./zshrc```
4. add ```laravel-sail``` to your zsh config plugins 
5. start a new terminal session and use the aliases

## Usage

### Pre Sail Installation Commands
| Alias | Description |
|:-:|:-:|
| `s cinit 80` | run `composer install --ignore-platform-reqs` using php version 8.0 - default php version is 8.1 |
| `s ninit 16` | run `npm install` using node 16 - default node version is 17 |
### General
| Alias | Description |
|:-:|:-:|
| `s`  |  `sail` |
| `sup`  |  `sail up` |
| `sud`  |  `sail up -d` |
| `sdown`  |  `sail down` |
|`sb`|`sail build`|

### artisan and Dependencies 
| Alias | Description |
|:-:|:-:|
| `sa`  |  `sail artisan` |
|`sp`|`sail php`|
|`sc`|`sail composer`|
|`sn`|`sail npm`|

### npm build commands
| Alias | Description |
|:-:|:-:|
|`swatch`|`sail npm run watch`|
|`sdev`|`sail npm run dev`|
|`sprod`|`sail npm run production`|

### Testing
| Alias | Description |
|:-:|:-:|
|`st`|`sail test`|
|`stp`|`sail test --parallel`|
|`sdusk`|`sail dusk`|
|`stan`|`./vendor/bin/phpstan`|

### Others
| Alias | Description |
|:-:|:-:|
|`ss`|`sail shell`|
|`stinker`|`sail tinker`|
|`sshare`|`sail share`|

