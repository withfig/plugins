Add git information to your prompt in bash and zsh.

# Disabling oh-my-git
oh-my-git can be disabled on a per-repository basis. Just add a

    [oh-my-git]
    enabled = false

in the `.git/config` file of a repo to revert to the original prompt for that particular repo. This could be handy when working with very huge repository, when the git commands invoked by oh-my-git can slow down the prompt.

# Known bugs and limitations

* git v1.8.4 or newer is required
* It works weird on brand new repositories, before the first commit
* It has been tested on Mac and Ubuntu only. I never managed to make it work on Cygwin
* Depending on the theme selected, you need an unicode font (like Sauce Code Pro, Menlo or Monaco on Mac OS X, or Monospace on Ubuntu; on Windows, with Cygwin, a good choice is [Meslo](https://github.com/andreberg/Meslo-Font) by [André Berg](https://github.com/andreberg), but I didn't tested the ooppa-lana-style theme)
* If the Terminal uses a clear background color, in Bash you need to change the colors defined in [prompt.sh](https://github.com/arialdomartini/oh-my-git/blob/oppa-lana-style/prompt.sh). The zsh version is not affected by this problem.
