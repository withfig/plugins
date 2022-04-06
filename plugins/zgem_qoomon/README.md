# zgem 🐚 💎
zsh dependency manager

### install to .zshrc
  
```
ZGEM_HOME="$HOME/.zsh.zgem"
# ZGEM_GEM_DIR="$ZGEM_HOME/gems"
# ZGEM_UTILS_DIR="$HOME"

[[ -e "$ZGEM_HOME" ]] || git clone 'https://github.com/qoomon/zgem.git' "$ZGEM_HOME"
source "$ZGEM_HOME/zgem.zsh" 
```
  
### usage
* load plugin form git source 
  * `zgem bundle 'https://github.com/qoomon/zsh-jumper.git' from:git use:'zsh-jumper.zsh'`
* load plugin from local source
  * `zgem bundle "$HOME/.zsh/awesome.zsh"`
* load completion from http source
  * `zgem bundle "http://example.org/completions/_awesome" from:http as:completion`
* load all utils from `$ZGEM_UTILS_DIR` directory
  * `zgem bundle`
* load one util from `$ZGEM_UTILS_DIR` directory
  * `zgem bundle example-util`
* clean all gems
  * `zgem clean`
* clean one gem
  * `zgem clean example-util`
* upgrade all gems
  * `zgem upgrade`
* upgrade one gem
  * `zgem upgrade example-util`
* update zgem
  * `zgem update`

#### parameters
* from - specify source protocol
  * file (default)
  * http
  * git

* use - specify custom file name to load
  * defaults
    * git: <repository_name>.plugin.zsh
    * http: basename from source url
  
* as - specify gem type
  * plugin (default)
  * completion


