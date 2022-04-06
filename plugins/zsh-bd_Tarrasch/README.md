Quickly go back to a specific parent directory instead of typing `cd ../../..` redundantly.

---

This is a reimplementation of
[vigneshwaranr/bd](https://github.com/vigneshwaranr/bd) that utilizes the power
of the zsh shell.

## Usage

    $ mkdir -p a/b/c/d
    $ cd a/b/c/d
    $ bd b
    $ ls
    c
    $ cd c/d
    $ bd 2
    $ ls
    c

Here's an animation also showing the completion functionality

![Animated gif](https://raw.githubusercontent.com/Tarrasch/zsh-bd/master/animation.gif "Animation that shows auto completion")

## Thanks

Thanks to
[@vigneshwaranr](https://github.com/vigneshwaranr)
for inspiring me to do a zsh version.

Thanks to [@voria](https://github.com/voria) for many useful
patches! (see commit log)
