# gulp-autocompletion-zsh

> Autocompletion for your gulp.js tasks in the Z-Shell (zsh).

## Installation

Install with npm or manually.

### Via npm

    $ npm install -g gulp-autocompletion-zsh

After that you have to restart your `zsh`.


### Manually

1. Clone this repository to your favorite path (e.g. `~/zsh-extensions/gulp-autocompletion-zsh`)
2. `source` the file in your `.zshrc`
3. Restart your `zsh`

```sh
# Your .zshrc
source $HOME/zsh-extensions/gulp-autocompletion-zsh/gulp-autocompletion.zsh
```

### Via antigen

    $ antigen bundle akoenig/gulp-autocompletion-zsh


## Usage

Switch to your project (a.k.a. the place where the `gulpfile.js` lives):

    $ gulp <TAB>

Exemplary output:

    λ build book → git master* → gulp
    appendix    concat      glossary     pdf    spellcheck  toc   build       default     lof         preface     statistics  

## Changelog

### Version 0.1.1 (20140401)

- Added note to README that you have to restart your zsh after installation.

### Version 0.1.0 (20140401)

- Implemented core functionality for suggesting the tasks on TAB.

## Author

Copyright 2014, [André König](http://iam.andrekoenig.info) (andre.koenig@posteo.de)


