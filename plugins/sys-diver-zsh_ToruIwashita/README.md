# sys-diver-zsh  

Dive into the system smoothly.  

The sys-diver enables directory change and editor startup with only key operations using widgits without typing `cd /to/dir/path/` or `vim /to/file/path` on the command line. This plugin provides a smooth command line operation.  

## Installation  

When using [antigen](https://github.com/zsh-users/antigen), please add the following code to zshrc.  

```  
antigen bundle ToruIwashita/sys-diver-zsh  
```  

When installing manually, it is as follows  

```  
git clone git@github.com:ToruIwashita/sys-diver-zsh.git /path/to/sys-diver-zsh  
echo 'source /path/to/sys-diver-zsh/sys-diver.plugin.zsh' >> ~/.zshrc  
```  

## Usage  

The simple way is to add the following code to zshrc.  
**WARNING**: This setting overrides some default settings. See Cosutom Settings when you want to set it finely.  

```  
sd-default-setting  
```  

By default `^z` is prefix. If you want to change it, pass the prefix as argument to `sd-default-setting`.  

```  
sd-default-setting '^q'  
```  

By adding this you can get a smooth command line operation.  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo.gif)  

### Example of use  

#### 1. Start completion by `^k`, expand next completion candidates under the directory selected by `^k` again and change the directory by `^o`  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-cd-1.gif)  

#### 2. If the selected path is a file, a file is inserted on the command line by `^z^o` when changing the directory  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-cd-2.gif)  

#### 3. If you press `^l` while inputting multiple paths, the editor is started for the last path  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-editor-1.gif)  

#### 4. When `^z^l` is used, the editor is started for all paths  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-editor-2.gif)  

#### 5. `^z^k` start the recent directory completion  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-recent-dir-completion.gif)  

#### 6. Show a list of directories after directory change  

Adding the `sd-set-splash-dive` setting.  

```  
sd-set-splash-dive on  
```  

![sys-diver](https://raw.githubusercontent.com/wiki/ToruIwashita/sys-diver-zsh/images/sys-diver-zsh-demo-splash-dive.gif)  

### Cosutom setting  

Since `sd-default-setting` makes the following settings, if you need to change, change the settings referring to the following.  

```  
setopt autocd  
setopt menucomplete  
setopt completeinword  

bindkey -v '^k' menu-complete-files  
bindkey -v '^l' edge-start-editor  
bindkey -v '^o' cd-leaf-dir  
bindkey -v '^^' cdup  
bindkey -v '^zi' immediate-vls  
bindkey -v '^z^i' immediate-ls  
bindkey -v '^z^j' immediate-cat  
bindkey -v '^z^k' menu-complete-recent-dirs  
bindkey -v '^z^l' start-editor  
bindkey -v '^z^o' cd-leaf-dir-and-insert-leaf-file-in-prompt  

bindkey -M menuselect '^a' beginning-of-line  
bindkey -M menuselect '^b' backward-char  
bindkey -M menuselect '^e' end-of-line  
bindkey -M menuselect '^f' forward-char  
bindkey -M menuselect '^g' .send-break  
bindkey -M menuselect '^i' forward-char  
bindkey -M menuselect '^j' .accept-line  
bindkey -M menuselect '^k' infer-next-history  
bindkey -M menuselect '^m' accept-line  
bindkey -M menuselect '^n' down-line-or-history  
bindkey -M menuselect '^p' up-line-or-history  
bindkey -M menuselect '^r' history-incremental-search-forward  
bindkey -M menuselect '^u' send-break  
bindkey -M menuselect '^]' accept-and-hold  
bindkey -M menuselect '^z' vi-insert  
```  

## Functions and widgets  

### Functions  

#### - `sd-default-setting`  

Enable default settings.  

#### - `sd-set-splash-dive`  

Execute `ls` command after directory change.  

#### - `sd-set-menu-completion-ls-colors`  

Change color of list in menuselect.  

e.g.)  

```  
sd-set-menu-completion-ls-colors '0:di=01;34:ln=01;36:mh=00:pi=40;'  
```  

### Widgets  

#### - `cd-leaf-dir`  

Change to the directory at the end of the path with the end of the command line as the path. If the target is a file path (e.g. `works/tmp.txt`), change to the parent directory (e.g. `works/`) of the file.  

#### - `cd-leaf-dir-and-insert-leaf-file-in-prompt`  

It behaves almost like cd-leaf-dir. However, if a path such as `works/tmp.txt` is the target, change to `works/` and insert `tmp.txt` at the prompt.  

#### - `cdup`  

Change parent directory.  

#### - `edge-start-editor`  

Start the editor set in `EDITOR` environment variable. If strings is inputted to the command line, start with the string at the end of the command line as an argument.  

#### - `start-editor`  

Start the editor set in `EDITOR` environment variable. If strings is inputted to the command line, all strings are activated as arguments.  

#### - `immediate-cat`  

Execute `cat`command with the sring at the end of the command line as an argument.  

#### - `immediate-ls`  

Execute `ls`command with the sring at the end of the command line as an argument.  

#### - `immediate-vls`  

Execute `ls -1`command with the sring at the end of the command line as an argument.  

### Completion widgets  

#### - `menu-complete-files`  

Completion with `_files` as completer.  

#### - `menu-complete-recent-dirs`  

Completion of directory history saved by `cdr`.  

