`zsh-dwim` attempts to predict what you will want to do next.  It provides a key binding (control-u) that will replace the current (or previous) command line with the command you will want to run next.

## Some examples

 * `apt-cache show zsh` becomes `sudo apt-get install zsh`
 * `tar ft RandomFile.tar.bz2` becomes `tar fx RandomFile.tar.bz2`
 * `sudo service apache stop` becomes `sudo service apache start`
 * `mkdir new_directory` becomes `cd new_directory`
 * `find . -size +5M` becomes `find . -size +5M -exec echo {} \;` becomes `find . -size +5M -exec {} \;`
 * If `ssh user@hostwithnewip` fails it becomes `ssh-keygen -R hostwithnewip`
 * If `mkdir more/than/one/path` fails it becomes `mkdir -p more/than/one/path`
 * If `cd /some/path` failes it becomes `mkdir /some/path`


There are some short screencasts on my blog demonstrating `zsh-dwim`:

 * [Demonstration of a few of zsh-dwim's oldest features](http://blog.patshead.com/2012/10/cleanup-of-zsh-dwim.html)
 * [Demonstration of zsh-dwim's remote filename completion](http://blog.patshead.com/2013/01/zsh-dwim-most-recent-remote-file-completion.html)

## Usage

Type a command and hit `control-u` and `zsh-dwim` will attempt to transform your command.  Typing `control-u` at an empty command prompt will recall the previous command from your history and then attempt to transform it.

## Creating your own transformations

You can add your own transformations by calling the `_dwim_add_transform` function.  This function takes up to three parameters, the third being optional.

    _dwim_add_transform <pattern to match> <code to run> [exit status of previous command]
    
Here's a simple example:

    ## tar ft -> tar fx (a.k.a. list -> extract)
    _dwim_add_transform '^tar (ft|tf)' \
      '_dwim_sed "s/^tar (ft|tf)/tar fx/"'

The `_dwim_sed` function is a little helped function that applies a `sed` regex to the current command.

## License

The MIT License (MIT)

Copyright (c) 2013 Pat Regan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



