# caniuse.plugin.zsh

A plugin for [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) adding 
[Can I Use...](http://caniuse.com) support to your OSX terminal.

## Installation

1.  Clone this repository into your oh-my-zsh custom plugins directory.

```shell
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/walesmd/caniuse.plugin.zsh ./caniuse
```

2. Update your `~/.zshrc` file to load the plugin.

```shell
plugins=(caniuse) # there will likely be other plugins listed here as well
```

## Usage

Use the `caniuse` command from your OSX terminal to quickly launch the website 
or search for specific terms.

```shell
# Launch http://caniuse.com
$ caniuse

# Search for webgl
$ caniuse webgl

# Search for webgl and border-radius (2 tabs are launched)
$ caniuse webgl border-radius

# Multi-word terms should be enclosed within quotes
$ caniuse "filter effects"
```

## License

The MIT License (MIT)

Copyright (c) 2013 Michael Wales

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

