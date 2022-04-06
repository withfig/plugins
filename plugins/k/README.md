> k is the new l, yo

## Directory listings for zsh with git features

**k** is a zsh script / plugin to make directory listings more readable, adding a bit of color and some git status information on files and directories.

### Git status on entire repos
![Repository git status](https://raw.githubusercontent.com/supercrabtree/k/gh-pages/repo-dirs.jpg)


### Git status on files within a working tree
![Repository work tree git status](https://raw.githubusercontent.com/supercrabtree/k/gh-pages/inside-work-tree.jpg)

### File weight colours
Files sizes are graded from green for small (< 1k), to red for huge (> 1mb).

**Human readable files sizes**  
Human readable files sizes can be shown by using the `-h` flag, which requires the `numfmt` command to be available. OS X / Darwin does not have a `numfmt` command by default, so GNU coreutils needs to be installed, which provides `gnumfmt` that `k` will also use if available. GNU coreutils can be installed on OS X with [homebrew](http://brew.sh):

```
brew install coreutils
```

![File weight colours](https://raw.githubusercontent.com/supercrabtree/k/gh-pages/file-size-colors.jpg)


### Rotting dates
Dates fade with age.  

![Rotting dates](https://raw.githubusercontent.com/supercrabtree/k/gh-pages/dates.jpg)


## Usage
Hit k in your shell

```shell
k
```
# 😮

## Minimum Requirements
zsh 4.3.11  
Git 1.7.2

## Contributors
[supercrabtree](https://github.com/supercrabtree)  
[chrstphrknwtn](https://github.com/chrstphrknwtn)  
[zirrostig](https://github.com/zirrostig)  
[lejeunerenard](https://github.com/lejeunerenard)  
[jozefizso](https://github.com/jozefizso)  
[unixorn](https://github.com/unixorn)  
[george-b](https://github.com/george-b)  
[philpennock](https://github.com/philpennock)  
[hoelzro](https://github.com/hoelzro)  
[srijanshetty](https://github.com/srijanshetty)  
[zblach](https://github.com/zblach)  
[mattboll](https://github.com/mattboll)  
Pull requests welcome :smile:  

## Thanks
[Paul Falstad](http://www.falstad.com/) for zsh   
[Sindre Sorhus](https://github.com/sindresorhus) for the fast git commands from zsh pure theme  
[Rupa](https://github.com/rupa/z) for that slammin' strapline  

Copyright © 2015 George Crabtree & Christopher Newton. MIT License.