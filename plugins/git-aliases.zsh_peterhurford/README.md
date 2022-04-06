<!--
## Git Aliases <a href="https://github.com/peterhurford/git-aliases.zsh/tags"><img src="https://img.shields.io/github/tag/peterhurford/git-aliases.zsh.svg"></a>
-->

Shorten various frequently used git aliases:

* `s` does `git status`
* `reset` does `git reset --hard`
* `reset <file>` does `git checkout <current branch> <file>`
* `co <branch>` does `git checkout <branch>`.  You can tab autocomplete these branches.
* `com` to quickly checkout master.
* `cob <branch>` does `git checkout -b <branch>` (make a branch)
* `gf` does `git fetch`
* `gb` does `git branch` (see your branches)
* `clone <git username> <repo name>` shortens `git clone` by not requiring the URL (though you can `clone <URL>` if you want to).  Also, will `cd` into the directory automatically. (Use clone -d to not cd automatically.)

Create new omnibus commands by merging things together:

* Whenever you checkout a branch, git status is run automatically.
* `cop <branch>` will checkout <branch>, pull, and then do git status. (`copm` for `cop master`)
* `cobm <branch>` will make a new branch called <branch>, but will checkout master and pull first (so you branch off of master)
* `rb` (ruby bundle) will run `bundle install`, `bundle exec rake db:migrate`, `bundle exec rake db:test:prepare`, and `bundle exec rake db:seed`
* `rp` (ruby pull) will `git pull` and `git fetch`, but then run ruby bundle.
* `corp <branch>` will checkout <branch> (co) and then ruby pull (rp).  co + rp = corp.
* `corbm <branch>` is like `cobm`, but with a ruby pull on master instead of a regular pull.  Useful for making new branches in ruby projects.
* `backmerge` will backmerge master by checking out master, pulling master, checking out your previous branch, and `git merge origin/master` that branch.
* `ruby_backmerge` will do `backmerge`, except with `rb` run first.
* `backmerge_all` will iterate over all the git branches in your repo and backmerge master into them.
* `rebase` starts a `git rebase` of master into the current branch. Continue interactively and make changes. `continue_rebase` will iterate to the next commit. `end_rebase` when all commits are complete to force push changes into the current branch.
* `dif` shows you the output of both `git diff` and `git status`.
* `prune <branch>` will delete that branch both locally and on git.
* `oldbranches` lists the 10 oldest branches.  Use `oldbranches x` to list the x oldest branches (e.g., `oldbranches 20` for the latest 20).
* `unmerged` tells you what branches are not yet merged.
* `plog` shows the git log, but prettier.
* `deploy` will run `bin/deploy` if the file exists, or `git push heroku master` otherwise.
* `release <tag>` will automatically release (`git tag` + `git push`) with that tag.

No changes are made to anything involving `git commit`, `git push`, or `git pull`, because these functionalities are turbocharged by [Send.zsh](https://github.com/robertzk/send.zsh) and [Send.vim](https://github.com/peterhurford/send.vim).


## Why use this instead of the "git" plugin?
[Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/) already has a [git plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/git) you can optionally install that has aliases.

I obviously prefer my plugin better -- it has alias names that make more sense to me, and it has more complex aliases that make working on things much easier (especially Ruby projects with built in `bundle` and `migrate`), and stuff like autopush on new branch is really neeat.  But if you don't work with Ruby and don't like some of the style choices I made (though feel free to suggest options for futher customizations, see above), you might prefer that plugin instead.


## Why can't I use them both?
Pick a side, we're at war!

But in seriousness, I think if you use them both (include both in your plugin line), nothing crashes and they don't interfere much with each other.  You'll be able to use the custom commands both here and there (i.e., both `gco` and `co` will work to do `git checkout`) and nothing in either plugin overwrites functionality of the other plugin.


## Help! Tab completion isn't working for branch names like you said!
First, I think this only works in Zshell, so if you're not using Zshell, then that's your first problem.

If you are using Zshell and things aren't working, you have to mess with your settings.  If you have either `autoload -U compinit && compinit` or `setopt completealiases` in your `.zshrc`, remove them.

If that doesn't work, you may have to include `unsetopt completealiases` in your `.zshrc` because it is being set somewhere else.  Though doing this may break the functionality of a different plugin, so watch out and choose wisely!

If the problem still persists, it's a problem I haven't encountered myself yet.  File an issue and I can take a look!


## If you like this, you might also like...
* [Send.zsh](https://github.com/robertzk/send.zsh), a git command by robertzk that combines `git add .`, `git commit -a -m`, and `git push origin <branch>`.
* [Send.vim](https://github.com/peterhurford/send.vim), a vim plugin by me to do the above _without leaving vim_.
* [Git-it-on.zsh](https://github.com/peterhurford/git-it-on.zsh), git commands to open files on GitHub from the command line.

