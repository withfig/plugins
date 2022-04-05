# gitgo
A small plugin for oh-my-zsh to launch Github/Gitlab repository from the command line. It will open the URLs using you default browser using the MacOS X `open` command or the common Linux `xdg-open` command. Hence, only Mac OS and Linux is currently suported.

## Disclaimer
This little script was coded at my leisure only to bring some convenience to my daily workflow. It comes with absolutely no guarantees. 

# Installation
* Cd into to the oh-my-zsh custom plugin directory. Usually `~/.oh-my-zsh/custom/plugins`.
* Clone this repository: `git clone https://github.com/ltj/gitgo.git`
* Edit your `.zshrc`file and add `gitgo` to the `plugins` section.
* Restart you terminal or run `source .zshrc`

# Usage 
Gitgo adds a bunch of aliases to the shell for quick access to the origin repo on Github/Gitlab:
1. `ghg` - Go to the repo homepage
2. `ghc` - The branch compare page
3. `ghp` - Create PR from current branch in shell (very useful if you just pushed this branch)

# Contribute
Feel free to submit a PR if you want to extend this. Chances are high that you are a better bash/zsh programmer than me ;)
