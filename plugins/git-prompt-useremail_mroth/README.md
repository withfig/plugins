# git-prompt-useremail
> zsh plugin to add prompt reminders for git user.email

Do you git commit under multiple email addresses depending on the situation?
(For example different addresses for work and open source projects.) Tend to
forget which one you have active at a given time, leading to having to amend
commits to fix it?  This is for you.

I personally use this to have an emoji in my prompt to remind me which email
will be recorded when I git commit.

## Usage

The shell function `git_prompt_useremail` will echo the email address your
next commit will be attributed to (checking both the `$GIT_AUTHOR_EMAIL`
environment variable and the local `git-config` cascade for `user.email`.)

More importantly, the `git_prompt_useremail_symbol` function will echo to you a
handy user definable emoji/icon/unicode-glyph for quick recognizeability!

To define the symbols, add entries to your git configuration (`~/.gitconfig` or
also see [git-config] for details of the many options there), with the format:

    [emailprompt "bwayne73@hotmail.com"]
        prompt = 🥂
    [emailprompt "bruce@wayne-enterprises.biz"]
        prompt = 👔
    [emailprompt "batman@justice-league.usa.gov"]
        prompt = 🦇

I personally like to put this one in my `$RPROMPT`.

    export RPROMPT='$(git_prompt_useremail_symbol) '

_Note that extra space at the end makes emoji in the RPROMPT look better in the
macOS terminal. The single quotation marks are important though, so that the
execution happens every time $RPROMPT is evaluated rather than when you first
set it._

<img alt="screenshot" 
     src="https://cloud.githubusercontent.com/assets/40650/23048542/63ea7ec2-f46b-11e6-8b7c-dc7102911feb.png"
     width="430" />

[git-config]: https://git-scm.com/docs/git-config


## Installation

### [Antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle mroth/git-prompt-useremail` to your `.zshrc` with your other bundle commands.

Antigen will handle cloning the plugin for you automatically the next time you start zsh. You can also add the plugin to a running zsh with `antigen bundle mroth/git-prompt-useremail` for testing before adding it to your `.zshrc`.

### [Oh-My-Zsh](http://ohmyz.sh/)

1. `cd ~/.oh-my-zsh/custom/plugins`
2. `git clone https://github.com/mroth/git-prompt-useremail`
3. Add *git-prompt-useremail* to your plugin list - edit `~.zshrc` and change `plugins=(...)` to `plugins=(... git-prompt-useremail)`

### [Zgen](https://github.com/tarjoilija/zgen)

Add `zgen load mroth/git-prompt-useremail` to your `.zshrc` file in the same function you're doing your other `zgen load` calls in. Zgen will handle automatically cloning the plugin for you the next time you do a `zgen save`.

### Bash

This script should work fine in bash as well, I just haven't tested it.  PRs with modifications and installation instructions are very welcome!

