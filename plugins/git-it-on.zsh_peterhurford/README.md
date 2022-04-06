## Git It On

A lot of times we have to look at files on GitHub.  But this intrudes our ideal command-line workflow, having to switch to a browser and navigate to the URL.  Wouldn't it be nice to just be able to open that file from the command line?

*Git It On*, the plugin for zshell, comes in here.

* `gitit` -- open your current folder, on your current branch, in GitHub or GitLab
* `gitit <folder or file>` -- opens that folder in your current branch (paths are relative)


## That's cool... What else?

### Well, for GitHub:

* `gitit <folder or file> <branch>` -- opens that folder on the specified branch.
* `gitit repo <username> <reponame>` -- opens up the specified repository.
* `gitit branch <branch>` -- open the repo for a chosen branch.
* `gitit compare` -- opens the compare file between your branch and master
* `gitit compare <branch>` -- opens the compare file for a chosen branch (compared with master).
* `gitit commits` -- opens the commits for your current branch
* `gitit commits <branch>` -- opens the commits for a chosen branch.
* `gitit issues` -- open the list of issues.
* `gitit history <filename>` -- opens the github history page for the file.
* `gitit history <filename> <branch>` -- opens the history page for the file on the chosen branch.
* `gitit pulls` -- open the list of pull requests for the repo.
* `gitit pulls <filters>` -- open the list of pull requests with filters (e.g., `is:open`, `author:peterhurford`)
* `gitit pulls <number>` -- open the pull request for that number.
* `gitit branches all` -- open up a list of all the branches in the repo.
* `gitit branches active` -- open up a list of active branches.
* `gitit branches stale` -- open up a list of stale branches.
* `gitit branches mine` -- open up a list of your branches.
* `gitit grep <term>` -- opens the github search page for your term
* `gitit ctrlp` -- opens the github file finder for master branch (note that you cannot pass search terms directly from the command line)
* `gitit ctrlp <branch>` -- opens the github file finder for your desired branch

### And for GitLab:

* `gitit <folder or file> <branch>` -- opens that folder on the specified branch.
* `gitit glcompare` -- open a comparison for current branch to `master`
* `gitit glcompare <src>` -- open a comparison for `src` to `master`
* `gitit glcompare <src> <target>` -- open a comparison for `src` to `target`
* `gitit glcommits <file>` -- open all commits; optionally specify `file` for all commits affecting it
* `gitit glbranches` -- open the list of branches
* `gitit glhistory <file> <branch>` -- open history of the current branch; optionally specify `file` and `branch`
* `gitit glmerges` -- open merge requests page
* `gitit glmerges <query>` -- open the list of pull requests with query (e.g. `variable_1`)
* `gitit glmerges <number>` -- open page for merge request `<number>`
* `gitit glissues <query|number>` -- similar to `glmerges`
* `gitit glctrlp <query>` -- search using the gitlab file finder
* `gitit glnetwork` -- open the GitLab repository graph

#### Gitlab Short Commands:
Gitlab commands also have short alternatives:  
`glcompare|glcm, glcommits|glco, glhistory|glh, glbranches|glb, glmerges|glm, glissues|gli, glctrlp|glcr, glnetwork|gln`


## But why even leave vim for the command line?
TODO: Make and link vim companion plugin.


## These commands are too long, I want to be even faster!
You can make commands faster by using aliases.  Put the following in your `.zshrc` (or `.bash_profile`)

```
#Gitit Aliases
alias myrepos="gitit repo peterhurford" #put your name here (usage: `myrepos <reponame>` to open up your repo.)
alias compare="gitit compare"
alias commits="gitit commits"
alias branch="gitit branch"
alias gistory="gitit history"
alias prs="gitit pulls"
alias myprs="gitit pulls author:peterhurford" #put your name here
alias mybranches="gitit branches mine"
alias gitgrep="gitit grep"
alias ctrlp="gitit ctrlp"
```

Feel free to change the aliases to whatever you'd like. You can even make them shorter, but the above is what I use.  Note that these aliases are not included by default.

If you want more git-related aliases for making your git workflow faster, also look at my [Git-aliases.zsh](https://github.com/peterhurford/git-aliases.zsh) plugin.


## Got any more plugins to share?
* [Send.zsh](https://github.com/robertzk/send.zsh), a git command by robertzk that combines `git add .`, `git commit -a -m`, and `git push origin <branch>`.
* [Send.vim](https://github.com/peterhurford/send.vim), a vim plugin by
 me to do the above _without leaving vim_.
