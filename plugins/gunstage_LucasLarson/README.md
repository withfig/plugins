>  `git unstage` as a service


A Git plugin for the shell that automagically remembers all the different commands there are to remove files from staging and when to use each

## What

There are at least nine ways to unstage files in a Git repository. Remembering which versions of Git support which syntax, under which circumstances, reduced my productivity enough to publish this software in response.

This is a command-line shell plugin for undoing `git add`. Too many staged files? Can’t remember if it’s `git reset HEAD` or `git restore --staged --`? Just remember `gunstage` or `git unstage`.

`gunstage` works exactly as you would expect it to as it performs the opposite of `git add`. You can unstage directories and specific files in as few commands as you’d like: `gunstage file1.txt file2.txt directory/`.

Want to unstage everything? Well that’s as easy as `gunstage --all` or `gunstage -A`.

## Why

There is no `git unstage` command packaged as part of Git’s default tooling. While `git restore --staged` often performs the task, it’s not an obvious formula based on Git’s other commands. `git restore --staged` is also unreliable, having [entered Git’s vocabulary in 2019](https://web.archive.org/web/20201214132901id_/github.blog/2019-08-16-highlights-from-git-2-23/#experimental-alternatives-for-git-checkout), after some 14 years of releases without it. Many older releases remain in the wild and `git restore` causes them to fail and choke. This software gracefully and silently accounts for those situations by always sending the syntax that Git used from 2005 until 2019: `git reset`.

Instead of keeping up with the latest incarnation of Git, whose manual says `git restore` “IS EXPERIMENTAL” and “THE BEHAVIOR MAY CHANGE” (emphasis [in original](https://git-scm.com/docs/git-restore/2.30.0#_description)), you can let this script do the remembering for you.

## Minutiæ of the pedantic and querulous variety 

To unstage content in a Git repository – that is, to undo a `git add` – you must remember [which commands](https://stackoverflow.com/q/58003030) are still in use out of the many I’m aware of having been recommended so far:

1.  `git restore --staged` ([source](https://stackoverflow.com/a/16044987)),

2.  `git reset HEAD` ([source](https://stackoverflow.com/a/6790291)),

3.  `git reset -q HEAD --` ([source](https://github.com/gggritso/gggritso.com/blob/a07b620/_posts/2015-08-23-human-git-aliases.md#L45) ([via](https://news.ycombinator.com/item?id=17987033#17987696)))

4.  `git reset` ([source](https://stackoverflow.com/a/6790285)),

5.  `git restore --staged --` ([source](https://github.com/iain/dotfiles/commit/4c8f8cf7b849d723cbd0e029457dd24c42ea6263)),

6.  `git reset HEAD --` ([source](https://stackoverflow.com/a/5798967)),

7.  `git rm --cached` ([source](https://stackoverflow.com/a/5798967)),

8.  `git reset --` ([source](https://stackoverflow.com/a/6919257)), and even

9.  `git rm --cached -- # ffs` ([source](https://stackoverflow.com/a/30231316)).

Next, you must be aware of repository context: if the repository is new and no commit has occurred yet, then `git restore --staged` won’t work, but `gunstage` will.

<div class="formalpara-title" markdown="1">

**Enter**

</div>

``` zsh
gunstage # 🔫 git unstage as a service
git unstage # 🔫 it just works!
```

Its name is an abbreviation and portmanteau of `git unstage` arising by analog from [Oh My Zsh’s other Git aliases](https://github.com/ohmyzsh/ohmyzsh/blob/c99f3c50fa46a93be28be88632889404fff3b958/plugins/git/README.md#aliases).

## How 

The scripts are written in Bourne shell-flavored, KornShell- and Zsh-compatible Bash, which is masquerading as Z shell with a `.zsh` filename extension so Oh My Zsh recognizes it as a plugin. What does that mean? The syntax is [as low-tech as possible](https://github.com/mcornella/dotfiles/blob/51feef648a2d68a82348ed4753ac3d6b65972510/zshenv#L10-L11) while performing sophisticated work to do one thing and do it well: `git unstage`.

## Requirements 

-   [Zsh 5.8](https://github.com/zsh-users/zsh/tree/zsh-5.8) (or [Ksh 93](https://github.com/att/ast/tree/ksh93u) (or [Bash 5.0](https://git.sv.gnu.org/cgit/bash.git/commit/?h=bash-5.0))), and

-   [Git 2.17](https://github.com/git/git/tree/v2.17.0).

## Testing 

I tested `gunstage` atop Zsh 5.8 and Bash 3.2 using Git:

-   2.17 on Ubuntu 18.04,

-   2.20 on Debian 9.12,

-   2.28, 2.29, and 2.30 on macOS 11.0 and Alpine 3.11 and 3.12, and

From macOS, I use [iTerm2](https://github.com/gnachman/iTerm2); from iOS, I use [iSH](https://github.com/ish-app/ish).

## Credit 

This repository’s [preview image](https://web.archive.org/web/20220120220252/socialsharepreview.com/?url=https%3A%2F%2Fgithub.com%2FLucasLarson%2Fgunstage) was created by [Twitter](https://github.com/twitter/twemoji/blob/7c1d3e9/2/svg/1f52b.svg).
