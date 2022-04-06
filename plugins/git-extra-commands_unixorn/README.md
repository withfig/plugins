**git-extra-commands** is a plugin that packages some extra `git` helper scripts. This collection is licensed with the Apache Version 2 license.

However, some of the scripts in this collection came from other sources and may have different licensing - if they do, their license information is included inline in the script source.

## Included Scripts

| Script | Original Source | Description |
| ------ | --------------- | ----------- |
| `git-add-username-remote` | Ryan Tomayko's dotfiles | Adds a remote for the current repository for the given GitHub username. |
| `git-age` | Kristoffer Gronlund's [wiki](https://github.com/krig/git-age/wiki) | A git-blame viewer, written using PyGTK.|
| `git-attic` | Leah Neukirchen's [blog](https://leahneukirchen.org/blog/archive/2013/01/a-grab-bag-of-git-tricks.html) | Displays a list of deleted files in your repository. The output is designed to be copy and pasted: Pass the second field to `git show` to display the file contents, or just select the hash without ^ to see the commit where removal happened. |
| `git-authors` | Michael Markert's [dotfiles](https://github.com/cofi/dotfiles) (as `git-changes`) | List authors in the repository in descending commit-count order. |
| `git-big-file` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Show files in the repository larger than a threshold size. |
| `git-branches-that-touch` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Shows which branches touch files under a path that are remote, unmerged, have a commit in the last six months and whose name doesn't start with 'enterprise-' |
| `git-branch-name` | Joe Block <jpb@unixorn.net> | Prints the current branch name in automation-friendly format. |
| `git-branch-rebaser` | Vengada Rangaraju <krangaraju@castlighthealth.com> | Kicks off an interactive rebase of all the commits on your branch. _Including pushed commits_, so be careful. |
| `git-change-author` | Michael Demmer in [jut-io/git-scripts](https://github.com/jut-io/git-scripts/blob/master/bin/git-change-author) | Change one author/email in the history to another. |
| `git-change-log` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts) | Transform `git log` output into a complete Changelog for projects that haven't been maintaining one. |
| `git-changes` | Michael Markert's [dotfiles](https://github.com/cofi/dotfiles) | Symlink to `git-authors`. List authors in the repository in descending commit-count order. |
| `git-checkout-by-date` | ? | Lets you checkout several files at once at the version specified by a date. |
| `git-checkout-commit` |From the [fzf wiki](https://github.com/junegunn/fzf/wiki/examples) | Uses [fzf](https://github.com/junegunn/fzf) to checkout a commit, showing the commit diff as preview. |
| `git-checkout-default-branch` | I got tired of keeping track of which repositories use `main`, `master` or something else as default branch | Checks out the default branch of the `origin` remote so you don't have to remember which repositories use `master`, `main` or whatever. |
| `git-checkout-pr` | Based on [gist.github.com/gnarf/5406589](https://gist.github.com/gnarf/5406589) | Check out a PR locally |
| `git-checkout-preview` | From the [fzf wiki](https://github.com/junegunn/fzf/wiki/examples) | Uses [fzf](https://github.com/junegunn/fzf) to checkout a branch, showing what commits diverge between the branches. |
| `git-children-of` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts) | Shows the children of a given `git` commit |
| `git-churn` | Gary Bernhardt's [dotfiles](https://github.com/garybernhardt/dotfiles/blob/master/bin/git-churn) | Show which files are getting changed most often in the repository. |
| `git-commit-browser` | From the [fzf wiki](https://github.com/junegunn/fzf/wiki/examples) | Uses [fzf](https://github.com/junegunn/fzf) to browse commit history. |
| `git-clone-subset` | Rodrigo Silva (MestreLion) <linux@rodrigosilva.com> | Uses `git clone` and `git filter-branch` to remove from the clone all files but the ones requested, along with their associated commit history. |
| `git-comma` | Leah Neukirchen's [blog](https://leahneukirchen.org/blog/archive/2013/01/a-grab-bag-of-git-tricks.html) | Adds and commits a file in one command |
| `git-conflicts` | Seth Messer's [bits and bobs](https://github.com/megalithic/bits-and-bobs/) repository | Show files with conflicts |
| `git-copy-branch-name` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Copy the current branch's name to the clipboard (macOS Only). |
| `git-credit` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Quicker way to assign credit to another author on the latest commit. |
| `git-current-branch` | Joe Block <jpb@unixorn.net> | Prints the name of the current branch with no odd characters or formatting, mainly useful in automation scripts. |
| `git-cut-branch` | Ryan Tomayko's dotfiles | Create a new branch pointed at **HEAD** and reset the current branch to the head of its tracking branch |
| `git-delete-dangling-commits` | [Stack Overflow](http://stackoverflow.com/questions/3765234/listing-and-deleting-git-commits-that-are-under-no-branch-dangling) | Clean up dangling commits that are not on any branch |
| `git-delete-local-merged` | From a deleted post by @tekkub | Delete all local branches that have been merged into **HEAD**. |
| `git-delete-merged-branches` | ? | Purges all branches that have been merged to a target branch (defaults to branches merged to master). |
| `git-delete-squashed-and-merged-branches` | Paul Irish's [dotfiles](https://github.com/paulirish/dotfiles) | Purges all branches that have been squashed and merged to a target branch (defaults to branches merged to master). Requires `pygithub`. |
| `git-delete-tag` | Joe Block <jpb@unixorn.net> | Delete a tag, both locally and from the origin remote. |
| `git-diff-last` | [Sebastian Schuberth](https://github.com/sschuberth) | Show the last change made to a file in the repository. |
| `git-divergence` | Gary Bernhardt's [dotfiles](https://github.com/garybernhardt/dotfiles/blob/master/bin/git-churn) | Shows differences between local branch and its tracking branch. |
| `git-edit-conflicts` | Joe Block <jpb@unixorn.net> | Edit the files that are marked as conflicted during a merge/rebase in your `$EDITOR/$VISUAL`. |
| `git-fetch-prs` | Pretty sure I saw this on slack, but can't recall which one | Get all Pull Request branches as local remote branches by refspec |
| `git-files` | Jake Zimmerman's [blog](https://blog.jez.io/cli-code-review/) | List the files different between the current branch and `$REVIEW_BRANCH`, which if unset defaults to the repository's default branch |
| `git-find-dirty` | Matthew McCullough's [scripts](https://github.com/matthewmccullough/scripts/) repository | |
| `git-flush` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts) | Compact your repository by dropping all reflogs, stashes, and other cruft that may be bloating your pack files. |
| `git-force-mtimes` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts) | Sets modification times of all files in the repository their last change date based on `git`'s log. Useful to avoid too new dates after a checkout confusing `make` or `rake`. |
| `git-forest` | Jan Engelhardt | Prints a text-based tree visualisation of your repository. Requires [Git.pm](https://metacpan.org/release/Git) |
| `git-functionlog` | Joe Block <jpb@unixorn.net> | Allows you to get a `git log` of a particular function, not a file |
| `git-fzf-add` | [Fuzzy Finding in Bash with fzf](https://bluz71.github.io/2018/11/26/fuzzy-finding-in-bash-with-fzf.html) | Use [fzf](https://github.com/junegunn/fzf) to select files to add to `git` |
| `git-fzf-log-browser` | [Fuzzy Finding in Bash with fzf](https://bluz71.github.io/2018/11/26/fuzzy-finding-in-bash-with-fzf.html) | Use [fzf](https://github.com/junegunn/fzf) to browse the repository's `git` log |
| `git-fzf-pickaxe-browser` | [Fuzzy Finding in Bash with fzf](https://bluz71.github.io/2018/11/26/fuzzy-finding-in-bash-with-fzf.html) | Use [fzf](https://github.com/junegunn/fzf) to display a `git log` list that has been filtered with [pickaxe](http://www.philandstuff.com/2014/02/09/git-pickaxe.html) for a search term. |
| `git-fzf-reflog-browser` | [Fuzzy Finding in Bash with fzf](https://bluz71.github.io/2018/11/26/fuzzy-finding-in-bash-with-fzf.html) | Use [fzf](https://github.com/junegunn/fzf) to browse the repository's `git` reflog list that can be filtered by entering a fuzzy term at the prompt. Navigation up and down the hash list will preview the changes of each hash. |
| `git-git` | Joe Block <jpb@unixorn.net> | Typing `git git foo` will make `git` do a `git foo` instead of complaining. |
| `git-github-open` | ? | Open GitHub file/blob page for FILE on LINE. |
| `git-gitlab-mr` | Noel Cower's [gist](https://gist.github.com/nilium/ac808ee3729cdce01ec0f3c0a499f099) | Open a merge request on GitLab |
| `git-history-graph` | ? | Pretty `git` log, single line per commit, with branch graphing |
| `git-ignored` | ? | Show files being ignored by `git` in the repository. |
| `git-improved-merge` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Sophisticated `git merge` with integrated CI check and automatic cleanup. |
| `git-incoming` | Michael Markert's [dotfiles](https://github.com/cofi/dotfiles) | Show commits in the tracking branch that are not in the local branch. |
| `git-lines` | [Neil Killeen](https://github.com/kiLLeen) <nkilleen@castlighthealth.com> | Gives you a list of author names with the number of lines last updated by that user in files in the current directory tree with the extension specified. |
| `git-ls-branch-files` | Joe Block | List files changed between a specified branch and the current branch |
| `git-ls-object-refs` | Ryan Tomayko's dotfiles | Find references to an object with SHA1 in refs, commits, and trees. All of them. |
| `git-maildiff` | Sanjeev Kumar's blogpost | A simple `git` command to email diff in color to reviewer/ co-worker. |
| `git-maxpack` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts) | Compress a repository's pack files as much as possible. |
| `git-move-commits` | Corey Oordt's [git-scripts](https://github.com/coordt/git-scripts/blob/master/git-move-commits) | `git move-commits num-commits correct-branch` moves the last n commits to correct-branch (creating it if necessary). |
| `git-neck` | Leah Neukirchen's [blog](https://leahneukirchen.org/blog/archive/2013/01/a-grab-bag-of-git-tricks.html) | Show commits from the HEAD until the first branching point. Companion script for `git-trail`. |
| `git-nuke` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Nukes a branch locally and on the origin remote. |
| `git-object-deflate` | Ryan Tomayko's dotfiles | Deflate an loose object file and write to standard output. |
| `git-oldest-common-ancestor` | Lee Dohm's [dotfiles](https://github.com/lee-dohm/dotfiles/blob/main/bin/git-oldest-ancestor) | Finds the oldest common ancestor commit between two branches. |
| `git-origin-head` | Don't recall, maybe twitter | Prints the name of the origin remote's default branch. Not every repository uses `main` or `master`. |
| `git-outgoing` | Michael Markert's [dotfiles](https://github.com/cofi/dotfiles) | Show commits that are on the local branch that have not been pushed to the tracking branch. |
| `git-overwritten` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Aggregates `git blame` information about original owners of lines changed or removed in the '<base>...<head>' diff. |
| `git-pie-ify` | JeeBak Kim's [gist](https://gist.github.com/jeebak/f9088cede18d31f2d3a0) | `git pie-ify pattern replacement` |
| `git-plotrepo` | Matthew McCullogh's [scripts collection](https://github.com/matthewmccullough/scripts/blob/master/git-plotrepo.rb) | Uses dot to draw a graph of the repository. |
| `git-promote` | Trevor's **Improving My git Workflow** blog post (404 now) | Promotes a local topic branch to a remote tracking branch of the same name. |
| `git-prune-branches` | Michael Demmer in [jut-io/git-scripts](https://github.com/jut-io/git-scripts/blob/master/bin/git-prune-branches) | Deletes each fully merged branch after prompting for confirmation, than asks if you want the deleted branches deleted from your upstream remotes. |
| `git-pruneall` | Ryan Tomayko's dotfiles | Prune branches from specified remotes, or all remotes when no remote is specified. |
| `git-publish` | Michael Markert's [dotfiles](https://github.com/cofi/dotfiles) | `git publish remote [remote-branch]` |
| `git-purge-from-history` | David Underhill’s blog | Permanently delete files or folders from your `git` repository. |
| `git-pylint` | Joe Block <jpb@unixorn.net> | Runs pylint on any .py files modified or added in the `git status` output. |
| `git-rank-contributors` | William Morgan <wmorgan-git-wt-add@masanjin.net> | Rummages through the changelog and orders contributors by the size of the diffs they're responsible for. |
| `git-rebase-authors` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Adds authorship info to interactive `git rebase` output |
| `git-rebase-theirs` | Rodrigo Silva (MestreLion) <linux@rodrigosilva.com> | Resolve rebase conflicts by favoring 'theirs' version. |
| `git-recent` | Mine | Shows information about most recent commit on all local branches |
| `git-recently-checkedout-branches` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Shows timestamp and name of recently checked-out branches in reverse chronological order. |
| `git-ref-recent` | [Y combinator article](https://news.ycombinator.com/item?id=22796640) | Shows the date, branch name, commit hash, and commit subject of branches, from most recently modified to oldest branches. |
| `git-rel` | Ryan Tomayko's dotfiles | Shows the relationship between the current branch and _ref_. With no _ref_, the current branch's remote tracking branch is used. |
| `git-related` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Show other files that often get changed in commits that touch `<file>`. |
| `git-remote-default-branch` | Mine | Shows the default branch for a specified remote, defaults to origin when no remote is specified. |
| `git-rename-branches` | Rodrigo Silva (MestreLion) <linux@rodrigosilva.com> | Rename multiple branches that start with a given name. |
| `git-reset-with-fire` | Joe Block <jpb@unixorn.net> | Hard reset the working directory, then zap any files not known to `git`. |
| `git-restore-mtime` | Rodrigo Silva (MestreLion) <linux@rodrigosilva.com> | Change mtime of files based on commit date of last change. |
| `git-reup` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Like `git pull` but show a short and sexy log of changes after merging or rebasing. |
| `git-rm-deleted-from-repo` | Joe Block <jpb@unixorn.net> | Removes files you deleted with `rm` from the repository for you. |
| `git-root-directory` | Joe Block <jpb@unixorn.net> | Prints the path to the root of the `git` repository you're in. |
| `git-run-command-on-revisions` | Gary Bernhardt's [dotfiles](https://github.com/garybernhardt/dotfiles) | Runs a given command over a range of `git` revisions. |
| `git-shamend` | Danielle Sucher's [git-shamend](http://www.daniellesucher.com/2014/05/08/git-shamend/) blog post | Amends your staged changes as a fixup (keeping the pre-existing commit message) to the specified commit, or HEAD if no revision is specified. |
| `git-show-overwritten` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Aggregates `git blame` information about the original owners of lines changed or removed in the '<base>...<head>' diff. |
| `git-shrink-repo` | Based on [gimbo/gimbo-git.zsh](https://github.com/gimbo/gimbo-git.zsh/blob/master/gimbo-git.zsh) | Shrinks your clone of a `git` repository. |
| `git-sp` | A. Schwarz's [git-sp](https://github.com/Schwarzy1/git-sp) | "Simple push", single short command to commit, and push. Use `-a` flag to add all files to commit. |
| `git-sr` | Noel Cower's [git-sr](https://gist.github.com/nilium/2829f6690ad888c25660c15ba3a7c59c) | Use `fzf` to switch to a different `git` ref. |
| `git-stats` | Jake Zimmerman's [blog](https://blog.jez.io/cli-code-review/) | Displays stats for the files different between the current branch and `$REVIEW_BRANCH`, which if unset defaults to the repository's default branch |
| `git-submodule-rm` | Greg V's [dotfiles](https://github.com/myfreeweb/dotfiles) & [Pascal Sommer](https://github.com/pascal-so/) | Allows you to remove a submodule easily with `git submodule-rm path/to/submodule`. |
| `git-switch-branch` | Andrew Steele's [dotfiles](https://github.com/Andrew565/dotfiles) | Make it easier to switch to a branch by a substring of its name. More useful if you are good about deleting branches which have been merged upstream and if your branch names include unique identifiers like ticket/issue numbers or feature names. |
| `git-tag-and-sign` | ? | Create and sign a new tag |
| `git-tag-diff` | John Wiegley's [git-scripts](https://github.com/jwiegley/git-scripts)  | Show the differences between local tags and ones on the remote, if any |
| `git-thanks` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | List the contributors to a repository in descending commit order, even if their contribution has been completely replaced. |
| `git-track` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Sets up your branch to track a remote branch. Assumes you mean _origin/localbranchname_. |
| `git-trail` | Leah Neukirchen's [blog](http://leahneukirchen.org/blog/archive/2013/01/a-grab-bag-of-git-tricks.html) | Show all branching points in the repository's `git` history so you can see how to reach commits in the current branch from other branches. |
| `git-undelete` | ? | Undeletes a file. |
| `git-undo-push` | ? | Undoes your last push to branch **$1** of origin |
| `git-undo` | ? | Undoes your last commit but keeps the changes in place. |
| `git-unpushed` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Show the diff of everything you haven't pushed to the origin remote yet |
| `git-unreleased` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Shows `git` commits since the last tagged version. |
| `git-up` | Zach Holman's [dotfiles](https://github.com/holman/dotfiles) | Like `git pull` but show a short and sexy log of changes after merging or rebasing. |
| `git-upstream-sync` | Joe Block <jpb@unixorn.net> | Fetches _upstream/yourforkname_ and rebases it into your local fork, then pushes to your origin remote. |
| `git-what-the-hell-just-happened` | Gary Bernhardt's [dotfiles](https://github.com/garybernhardt/dotfiles/blob/master/bin/git-what-the-hell-just-happened) | Show what just happened. |
| `git-when-merged` | Michael Haggerty [git-when-merged](https://github.com/mhagger/git-when-merged) | Find when a commit was merged into one or more branches. |
| `git-where` | Mislav Marohnić's [dotfiles](https://github.com/mislav/dotfiles) | Shows where a particular commit falls between releases. |
| `git-whoami` | Peter Eisentraut | Shows what username & email you have configured for the repository you're in |
| `git-winner` | Garry Dolley [https://github.com/up_the_irons/git-winner](https://github.com/up_the_irons/git-winner) | Shows what authors have made the most commits, both by number of commits and by number of lines changed. |
| `git-wordiness` | Noel Cower | Shows how wordy people's commit messages are. Useful for shaming the folks who commit atrocities like `git commit -m fixup` |
| `git-wtf` | William Morgan <wmorgan-git-wt-add@masanjin.net> | `git-wtf` displays the state of your repository in a readable, easy-to-scan format. It's useful for getting a summary of how a branch relates to a remote server, and for wrangling many topic branches. |
| `github-open` | Ryan Tomayko's dotfiles | |

## Useful git aliases

Here are some helpful aliases for your `~/.gitconfig`

| alias | Description |
| ----- | ----------- |
| `ahead-of-master = log --oneline origin/master..HEAD` | Show commits that haven't made it to master yet. |
| `fetch-pull-requests = fetch origin '+refs/pull/*/head:refs/remotes/origin/pull/*'` | Fetch pull requests from GitHub so you can `git checkout pull/123` and test them locally. |
| `roots = log --all --oneline --decorate --max-parents=0` | Show the root commits. |
| `unpushed = log @{u}..` | Show which commits have not been pushed to the tracking branch and are safe to amend/rebase. |
| `work-in-progress = rebase -i @{u}` | Starts an interactive rebase of all the commits you haven't pushed yet. Handy for collapsing a bunch of work-in-progress snapshots into logical commits before pushing, without having to worry about accidentally squashing a commit someone else has already referred to. |

### Requires:

* A recent version of `git`
* Python 3+
* Ruby 2.2+

## Thanks

Many thanks to all the contributors over the years.

<a href="https://github.com/unixorn/git-extra-commands/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=unixorn/git-extra-commands" />
</a>

Made with [contributors-img](https://contributors-img.web.app).
