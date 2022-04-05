Type `git open` to open the repo website (GitHub, GitLab, Bitbucket) in your browser.

![Demo of git open in action](https://user-images.githubusercontent.com/39191/33507513-f60041ae-d6a9-11e7-985c-ab296d6a5b0f.gif)

## Usage

```sh
# Open the page for this branch on the repo website
git open [remote-name] [branch-name]

# Open the current commit in the repo website
git open --commit
git open -c

# If this branch is named like issue/#123, this will open the corresponding
# issue in the repo website
git open --issue
git open -i

# Only print the url at the terminal, but don't open it
git open --print
git open -p
```

(`git open` works with these [hosted repo providers](#supported-remote-repositories), `git open --issue` currently only works with GitHub, Visual Studio Team Services and Team Foundation Server)

### Examples

```sh
# opens https://github.com/TRACKED_REMOTE_USER/CURRENT_REPO/tree/CURRENT_BRANCH
$ git open

# opens https://github.com/PROVIDED_REMOTE_USER/CURRENT_REPO/tree/CURRENT_BRANCH
$ git open someremote

# opens https://github.com/PROVIDED_REMOTE_USER/CURRENT_REPO/tree/PROVIDED_BRANCH
$ git open someremote somebranch

# If branches use naming convention of issues/#123,
# opens https://github.com/TRACKED_REMOTE_USER/CURRENT_REPO/issues/123
$ git open --issue

# prints https://github.com/TRACKED_REMOTE_USER/CURRENT_REPO/tree/CURRENT_BRANCH
$ git open --print

# opens https://github.com/TRACKED_REMOTE_USER/CURRENT_REPO/pulls
$ git open --suffix pulls
```

## Supported remote repositories

git-open can automatically guess the corresponding repository page for remotes
(default looks for `origin`) on the following hosts:

- github.com
- gist.github.com
- gitlab.com
- GitLab custom hosted (see below)
- bitbucket.org
- Atlassian Bitbucket Server (formerly _Atlassian Stash_)
- Visual Studio Team Services
- Team Foundation Server (on-premises)
- AWS Code Commit

## Configuration 

See the [man page](git-open.1.md) for more information on how to configure `git-open`.

## Alternative projects

See [hub](https://github.com/github/hub) for complete GitHub opening support.
It's the official GitHub project and provides `hub browse`.

[Homebrew has an alternate git-open](https://github.com/jeffreyiacono/git-open)
that only works with GitHub but can open user profile pages, too.

@[gerep has an alternate git-open](https://github.com/gerep/git-open) that
works with a few providers. Of note, it opens the default view for BitBucket
instead of the source view.

And, of course, [jasonmccreary's original gh](https://github.com/jasonmccreary/gh)
from which this plugin was forked.

## Thanks

[jasonmccreary](https://github.com/jasonmccreary/) did [the initial hard work](https://github.com/jasonmccreary/gh). Since then, [many contributors](https://github.com/paulirish/git-open/graphs/contributors) have submitted great PRs.

## Related projects

- [`git recent`](https://github.com/paulirish/git-recent) - View your most recent git branches
- [`diff-so-fancy`](https://github.com/so-fancy/diff-so-fancy/) - Making the output of `git diff` so fancy
