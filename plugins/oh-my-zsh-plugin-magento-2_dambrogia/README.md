# Oh My ZSH Plugin - Magento 2

This plugin will allow for autocompleting Magento 2 CLI options and running the Magento binary through an `m2` function.

### Getting Started

    # Add to custom plugins
    cd ~/.oh-my-zsh/custom/plugins
    git clone https://github.com/dambrogia/oh-my-zsh-plugin-magento-2.git magento-2
    
    # Add the magento-2 to your plugins within your ~/.zshrc
    # This is based on editing the default ~/.zshrc - YMMV
    plugins=(
        git
        magento-2
    )
    
    # Reload ~/.zshrc with new plugin
    source ~/.zshrc
    
    # Declare your Magento 2 root directory
    m2:set_root <root_dir>
    
    # Set your autocomplete suggestions - this will need to be updated when
    # Magento 2 CLI commands are added/removed
    m2:set_autocomplete
    
    # View all availale options
    m2:help
    

    
### Usage

Running the following:
    
    m2 <tab>
    
Should yeild results similar to what you see below:

    vagrant@host /var/www/html % m2
    admin:user:create                        dev:tests:run                            migrate:delta
    admin:user:unlock                        dev:urn-catalog:generate                 migrate:settings
    app:config:dump                          dev:xml:convert                          module:disable
    app:config:import                        help                                     module:enable
    app:config:status                        i18n:collect-phrases                     module:status
    cache:clean                              i18n:pack                                module:uninstall
    ...
    ...
    
Simarly, running the following:
    
    m2 cach<tab><tab>
    
Should yeild results similar to what you see below:

    vagrant@host /var/www/html % m2 cache:
    cache:clean    cache:disable  cache:enable   cache:flush    cache:status
    
### Troubleshooting
Error messages are a point point because of how Zsh handles the autofill. For any errors you might run into, it is recommended to do the following:

#### Confirm the `<magento_root>/bin/magento` binary is executable
    
    chmod u+x <magento_root>/bin/magento
____
#### Confirm the Magento root directory set is correct
    
    m2:get_root
    
If needed, correct the root directory set with:

    m2:set_root <magento_root>
____    
#### Reset the autocomplete suggestions
 
    m2:set_autocomplete
____    
#### Other issues
 
 View all options that are available:
 
    m2:help
 

