# Plugin

Custom `zsh plugin` to easy create custom zsh plugins from a boilerplate template.

## Setup
Create `.zsh-plugins` file in your home directory. Add `plugins=(plugin)` to install the plugin. Then `source $HOME/.zsh-plugins` in .zshrc config file. Plugin installs and uninstalls will occur from this file.
 
## Customization
### Plugin install location 
The default plugin install location is `$HOME/.zsh-plugins` but this can be overwritten 
by setting `plugins_install_location="path/to/plugin_install"` in the plugin config file.

### Custom Plugins Location
The default plugins location uses the default zsh custom plugins location
`$HOME/.oh-my-zsh/custom/plugins` but this can be overwritten by setting
`custom_plugins_location="path/to/custom/plugins"` in the plugin config file.

## Basic Usage

```
  plugin list, ls           - show custom plugins
  plugin directory, dir, d  - show plugins location
  plugin create, c [name]   - create plugin
  plugin init,              - boilerplate plugin template
  plugin install [plugin]   - install plugin
  plugin uninstall [plugin] - uninstall plugin
  plugin edit [plugin]      - edit plugin
  plugin config             - edit plugins config: .zsh-plugins
  plugin config show [s]    - display plugins config: .zsh-plugins            
  plugin help, h            - show help 
```

## License
Licensed under the [MIT License](http://nemo.mit-license.org/).
Free as beer!

##Credits
Darren Butcher: [@darrenbutcher](http://twitter.com/darrenbutcher)

