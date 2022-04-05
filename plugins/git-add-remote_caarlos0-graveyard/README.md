# git-add-remote [![Build Status](https://travis-ci.org/caarlos0/git-add-remote.svg?branch=master)](https://travis-ci.org/caarlos0/git-add-remote)

> A shell plugin to easily add remotes to git repositories.

# Why

It is so damn boring to type or copy and paste the URLs changing only the
fork name.

# Usage

Given that you are in a valid git managed folder, with a remote named `origin`,
you can, for example, add your company's remote as upstream:

```console
$ add-upstream company

$ git remote -v
origin  git@github.com:caarlos0/random.git (fetch)
origin  git@github.com:caarlos0/random.git (push)
upstream  git@github.com:company/random.git (fetch)
upstream  git@github.com:company/random.git (push)
```

Or even add your coworker's remote to work in some branch together:

```console
$ add-remote my-coworker

$ git remote -v
origin  https://github.com/caarlos0/random.git (fetch)
origin  https://github.com/caarlos0/random.git (push)
my-coworker  https://github.com/my-coworker/random.git (fetch)
my-coworker  https://github.com/my-coworker/random.git (push)
```

Some people have hard aliases in github, so you can even set the remote's name:

```console
$ add-remote _c0w0rk3r_0x12 newguy

$ git remote -v
origin  git@github.com:caarlos0/random.git (fetch)
origin  git@github.com:caarlos0/random.git (push)
newguy  git@github.com:_c0w0rk3r_0x12/random.git (fetch)
newguy  git@github.com:_c0w0rk3r_0x12/random.git (push)
```

`newguy`'s tend to multiply, so I don't recommend naming it like that.

# Installation

It was innitialy made to be used in ZSH, so, if you use antibody, antigen, or
whatever, just `bundle` it:

```console
$ antibody bundle caarlos0/git-add-remote
```

If you use bash, you can clone this repo somewhere or just download the
[add-remote.sh](/add-remote.sh) file and source the
[add-remote.sh](/add-remote.sh) file in your `~/.profile` or wherever you like.


# `git alias`ing

```console
$ git config --global alias.add-upstream '!zsh -ic \"add-upstream $*\"''
$ git config --global alias.add-remote '!zsh -ic \"add-remote $*\"''
$ git add-upstream org
$ git add-remote user remote_name
$ git add-remote user
```

> These examples are for zsh, but I'm pretty sure they also work on bash by
replacing `zsh -ic` with `bash -ic`.

