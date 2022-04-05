apache2.plugin.zsh
==================

ZSH plugin for Apache 2. I use this plugin in Ubuntu and I don't know is it properly works in another systems (it requires sudo).

Installation
------------

Antigen:
    
    antigen bundle voronkovich/apache2.plugin.zsh

Or clone this repo and add this into your .zshrc:

    fpath=(path/to/cloned/repo $fpath)

Aliases and functions
---------------------

+ a2rl - reload Apache configuration;
+ a2rs - restart Apache;
+ a2as - add new virtual host (see below);
+ a2ds - delete virtual host;
+ a2ens - enable virtual host;
+ a2dis - disable virtual host;
+ a2es - edit virtual host configuration. Configuration will be opened in editor that was defined by $EDITOR variable;
+ a2gs - go to host root directory;
+ a2enm - enable Apache module;
+ a2dim - disable Apache module.

Adding new virtual host
-----------------------

Usage:
 
    a2as [OPTIONS] SITE_NAME [SITE_PATH]

Options:

    -t template name
    -l add site to /etc/hosts
    -h show this output

Examples:

    a2as -lt symfony mysite.loc /var/www/mysite.loc
    a2as mysite.loc ./public_html/mysite.loc
    a2as mysite

You can add your custom virtual hosts templates directory by defining $ZSH_PLUGIN_APACHE_SITES_CUSTOM_TEMPLATES variable in your .zshrc.

License
------

Copyright (c) Voronkovich Oleg. Distributed under the GNU GPL.

