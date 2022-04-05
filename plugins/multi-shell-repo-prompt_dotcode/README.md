Multi-shell repo prompt
==========
This is a shell script that provides useful information (in your prompt) about the repository that you are in. It currently works for [Git](http://git-scm.com/) and [Mercurial](http://mercurial.selenic.com/), under [zsh](http://en.wikipedia.org/wiki/Zsh) as well as [bash](http://en.wikipedia.org/wiki/Bash_%28Unix_shell%29).

Under bash, when in a dirty git repo:

![bash git dirty](https://raw.githubusercontent.com/dotcode/multi-shell-repo-prompt/master/img/bash-git-dirty.png)

Under zsh, when in a clean hg repo:

![zsh hg clean](https://raw.githubusercontent.com/dotcode/multi-shell-repo-prompt/master/img/zsh-hg-clean.png)

It's been written to make it easy to tweak the colours and the characters used, so you can get it setup to display how you want without having to dirty your hands with too much of that filthy shell code that's like … _so_ from the 1970's. The aim when tweaking this was to (as far as possible) have one block of code that could be dropped into a bash or zsh initialisation file and "just work".

I frequently switch between bash and zsh, and like my prompts to contain the same functionality - only differing in a couple of respects (it's nice if the prompt provides some visual indication of what shell you're under). To this end the default colours are slightly different, and outside of a repo the prompt character differs between bash and zsh - under bash it's '$', under zsh it's '%'. Trivially easy to change this to something you're happier with.

As well as the usual stuff you might like in your prompt, it displays which part of your current working directory is tracked in version control. At the end of the prompt it displays the name of the branch you are currently on, as well as the status of the repo - how many files you have modified or untracked or wha'eva.

This is entirely based on Steve Losh's excellent work, both his "[extravagant zsh prompt](http://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/)" (note his zsh prompt is more sophisticated than this one detailed here) - and [hg-prompt](http://stevelosh.com/projects/hg-prompt/) as well (which this is dependent upon).

The infinitely talented [Andrew Hayward](https://github.com/andrewhayward)([@arhayward](https://twitter.com/arhayward)) wrote most of the code, I just fixed a few bugs (doubtlessly introducing a few of my own) and made it work in zsh as well as bash (I've tried to use as much shell-agnostic code as possible - although there's probably quite a bit of it that is non POSIX-compliant - would be nice to see it forked and working in other shells as well!)

Oh, and - like 90% of projects on teh internets - I also received a bit of help from [Matthew Somerville](http://www.dracos.co.uk/)([@dracos](https://twitter.com/dracos)) as well.


Requirements
------------
You'll need to install [hg-prompt](http://stevelosh.com/projects/hg-prompt/).

If you want to make your OS X prompt as pretty as shown, have a read of [Candy Colored Terminal](http://stevelosh.com/blog/2009/03/candy-colored-terminal/), also by [Steve Losh](http://stevelosh.com/about/).

Installation
------------
All you need is the file `prompt.sh` from this repo (which you get by cloning or forking the repo or simply downloading the file directly - cloning lets you pull newest versions, though). Then import it from within your `~/.bash_profile` or `~/.zshrc` or wha'eva:

	[… usual stuff contained in .bash_profile or .zshrc or wha'eva …]
	
	. ~/Dropbox/home/prompt.sh
	
	[… usual stuff contained in .bash_profile or .zshrc or wha'eva …]

***

* Note that you should remove any pre-existing lines in those rc files that start with `export PS1=` (in bash) or `PROMPT=` (in zsh). For zsh, it is advisable, to also include the line `setopt PROMPT_SUBST` before you import `prompt.sh`.

* Note that I (Jude) keep `prompt.sh` in Dropbox - not necessary to get this working (obviously), but I like to keep all my user shell intialisation files (`.bash_profile`/`.zshrc`/`.gitconfig`/`.inputrc`/`.hgrc` etc etc etc) in Dropbox - then symlink to them (I like the same prompt and history and shell behaviour on all my machines). It aids in the setup of new machines, and helps if they get stolen (which mine do).

If you like this idea, but don't know how to create a symlink, then RTFM^H^H^H^H have a look at this example …

	$ cd
	$ mv .bash_history ~/Dropbox/home/ # move your bash_history to dropbox
	$ ln -s ~/Dropbox/home/.bash_history .bash_history # create a symlink to your .bash_history	


Author
------
Andrew Hayward & Jude Robinson (dotcode at gmail dot com @dotcode)

