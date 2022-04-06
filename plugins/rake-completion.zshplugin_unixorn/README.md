# rake-completion.zshplugin

A rake task tab completion plugin for zsh, suitable for use with [zgen](https://github.com/tarjoilija/zgen) and other [oh-my-zsh](http://ohmyz.sh/) compatible frameworks. It was converted from a blog post at the [Ruby on Rails](http://weblog.rubyonrails.org/2006/3/9/fast-rake-task-completion-for-zsh/) blog, but I wanted it in a zsh plugin so I could use it now that I've switched to zgen.

For speed, this caches the output for later usage in a .rake_tasks file in the same directory as the Rakefile. If the Rakefile is newer than .rake_tasks, it will rebuild the cache.

## How to install

## Antigen
Add a bundle entry to your .zshrc
```bash
antigen bundle unixorn/rake-completion.zshplugin
```

### [Oh-My-Zsh](http://ohmyz.sh/)

1. `cd ~/.oh-my-zsh/custom/plugins`
2. `git clone repo`
3. Add the repo to your plugin list

### [Prezto](https://github.com/sorin-ionescu/prezto)

1. Clone the plugin into your prezto modules directory
2. Add the plugin to your `.zpreztorc` file
3. Open a new terminal window or tab

## [zgen](https://github.com/tarjoilija/zgen)

Add a zgen load entry to your .zshrc with your other plugins:
`zgen load unixorn/rake-completion.zshplugin`

Add `.rake_tasks` to your global [.gitignore](https://help.github.com/articles/ignoring-files#global-gitignore) so your repositories don't get polluted.

