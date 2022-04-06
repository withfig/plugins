# firebase-zsh
Add a prompt indication that you're in a directory with `firebase.json` (aka "firebase project").

<p align="center">
<img height=100 alt="Eastwood theme" src="https://github.com/rmrs/firebase-zsh/raw/master/imgs/eastwood.png">
</p>
<p align="center">
<img height=100 alt="Robbyrussell theme" src="https://github.com/rmrs/firebase-zsh/raw/master/imgs/robbyrussell.png">
</p>

## Getting started

Download the plugin file [`firebase.plugin.zsh`](https://github.com/rmrs/firebase-zsh/raw/master/firebase.plugin.zsh) and move it to
`~/.oh-my-zsh/plugins/firebase/firebase.plugin.zsh`.

Add the given plugin to your `plugins` list in the `.zshrc` file:
~~~
plugins=(git firebase)
~~~

Update the shell prompt of your theme: 

### robbyrussell theme
`robbyrussel` is the default `oh-my-zsh` theme. Update the `PROMPT` variable
in the file `.oh-my-zsh/themes/robbyrussell.zsh-theme` with
`$(firebase_status_robbyrussell)`: 
~~~
PROMPT='${ret_status} %{$fg[cyan]%}%c%{$reset_color%} $(firebase_status_robbyrussell) $(git_prompt_info)'
~~~

### eastwood theme
Update the `PROMPT` variable
in the file `.oh-my-zsh/themes/eastwood.zsh-theme` with
`$(firebase_status_eastwood)`: 

~~~
PROMPT='$(git_custom_status)$(firebase_status_eastwood)%{$fg[cyan]%}[%~% ]%{$reset_color%}%B$%b '
~~~


