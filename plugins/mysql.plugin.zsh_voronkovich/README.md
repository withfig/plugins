mysql.plugin.zsh
=====================

Zsh plugin for mysql 

Installation
------------

Antigen:
    
    antigen bundle voronkovich/mysql.plugin.zsh

Or clone this repo and add this into your .zshrc:

    source path/to/cloned/repo/mysql.plugin.zsh

Add your mysql credentials into the ~/.my.cnf:
    
    [client]
    user=your_user
    password=your_password

Aliases and functions
---------------------

+ my - alias for mysql;
+ mys - alias for mysqlshow;
+ mycu - create a new user;
+ mycd - create a new database;
+ mycud - create a new user and a database with the same name;
+ mysu - show all users;
+ mytd - truncate all tables in the specified database;

License
-------

Copyright (c) Voronkovich Oleg. Distributed under the Unlicense.

