<h3 align="center"><code>Undo your last oopsie 🙈️ in git</code></h4>

<h2><details><summary>See video demos ✨️</summary>

<h4>Undo <code>git add</code></h4>

https://user-images.githubusercontent.com/34342551/121651365-29dbdc80-cab8-11eb-8c43-6d0c4b1509ad.mp4

<h4>Undo <code>git branch -D</code></h4>

https://user-images.githubusercontent.com/34342551/121650985-c487eb80-cab7-11eb-9b6a-9257fa704d1c.mp4

<h4>Undo <code>git merge</code></h4>

https://user-images.githubusercontent.com/34342551/121651071-d9fd1580-cab7-11eb-929d-d9359a64f0eb.mp4

</details></h2>

## Why `ugit`

- You did an accidental `git` command you didn't want to.
- You don't want to waste your time searching on _how to undo ..._
- Because `ugit` is cool

### [Motivations behind writing ugit 🙇‍♂️️](https://bhupesh-v.github.io/undo-your-last-git-mistake-with-ugit)

## What's in the box

`ugit`/`git-undo` supports undoing following operations, some are a WIP. If you know of any other operations that can be undone and is not in the list, make sure to send a quick PR 💛️

- [x] Undo `git commit`
- [x] Undo `git add`
- [x] Undo `git push`
- [x] Undo `git branch -D` (branch delete)
- [x] Undo `git pull`
- [x] Undo `git reset`
- [x] Undo `git tag -d` (tag delete)
- [x] Undo `git stash apply`
- [x] Undo `git stash pop/drop/clear`
- [x] Undo accidental file delete (Restore a deleted file after a commit)
- [x] Undo (Restore) a file to a previous version
- [x] Undo `git merge`
- [x] Undo `git cherry-pick`
- [ ] Undo `git tag` (rename a tag)
- [ ] Undo `git rebase`
- [ ] Undo `git worktree remove` (recover deleted work-tree)

Help me finish above tasks by contributing?

Have any other ideas/suggestions? [**Hop in to ugit discussions 💬️**](https://github.com/Bhupesh-V/ugit/discussions/7)

## `ugit` in ...

### News

- Featured on [**Changelog News**](https://changelog.com/news/ugit-helps-you-undo-your-last-git-command-with-grace-8X6L#discussion)
- The [guide was **tweeted by GitHub**](https://twitter.com/github/status/1392207961355862018?s=20) (I was logging my research process there while building ugit)

### Community

- Alexander Alemayhu made a youtube tutorial on [Undoing Your Last Git Commit with Ugit](https://www.youtube.com/watch?v=nUnCgKb4tSc)


## Installation

### Prerequisites

**ugit** dependencies:

- **Bash** >= `4.x.x`
- **Git** >= `2.23.0`
- [**fzf**](https://github.com/junegunn/fzf) >= `0.21.0` - [Installation guide](https://github.com/junegunn/fzf#installation)
- GNU utils like `awk`, `grep`, `tput` etc


## Please read ⚠️

Git comes with a garbage collector ([in case you didn't know](https://git-scm.com/docs/git-gc)) therefore undoing some commands will become impossible if the entries are deleted from the reflog.
One way to prevent this is to increase default time limits before the reflog entries expire.

Add these configuration in your global `.gitconfig` file:

```gitconfig
[gc]
    # default 90 days
    reflogExpire = 200
```
Used to set how long records in a branches reflog should be preserved.

```gitconfig
[gc]
    # default 30 days
    reflogExpireUnreachable = 90

```
Used to set how long inaccessible reflog records should be preserved.

## Not satisfied? 😒️

You can read my in-process guide on [**How to undo anything in Git**](https://bhupesh.gitbook.io/notes/git/how-to-undo-anything-in-git)

## Author

:bust_in_silhouette: **Bhupesh Varshney**

- Web : [bhupesh-v.github.io](https://bhupesh-v.github.io)
- Twitter : [@bhupeshimself](https://twitter.com/bhupeshimself)
- DEV : [bhupesh](https://dev.to/bhupesh)

## Credit & Thanks
To all the SO threads that I will probably never visit again ;)

## ☺️ Show your support

Support me by giving a ⭐️ if this project helped you! or just [![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FBhupesh-V%2Fugit%2F)](https://twitter.com/intent/tweet?url=https://github.com/Bhupesh-V/ugit&text=ugit%20via%20@bhupeshimself)

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/BhupeshVarshney/)

## 📝 License

Copyright © 2021 [Bhupesh Varshney](https://github.com/Bhupesh-V).<br />
This project is [MIT](https://github.com/Bhupesh-V/ugit/blob/master/LICENSE) licensed.

## 👋 Contributing

Please read the [CONTRIBUTING](CONTRIBUTING.md) file for the process of submitting pull requests to us.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sharan-aithal"><img src="https://avatars.githubusercontent.com/u/32029982?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sharan Aithal</b></sub></a><br /><a href="https://github.com/Bhupesh-V/ugit/commits?author=sharan-aithal" title="Code">💻</a> <a href="https://github.com/Bhupesh-V/ugit/commits?author=sharan-aithal" title="Documentation">📖</a></td>
    <td align="center"><a href="https://tabulate.tech"><img src="https://avatars.githubusercontent.com/u/58576759?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabulate</b></sub></a><br /><a href="https://github.com/Bhupesh-V/ugit/commits?author=TabulateJarl8" title="Code">💻</a> <a href="#platform-TabulateJarl8" title="Packaging/porting to new platform">📦</a></td>
    <td align="center"><a href="http://unixorn.github.io"><img src="https://avatars.githubusercontent.com/u/23920?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Block</b></sub></a><br /><a href="https://github.com/Bhupesh-V/ugit/commits?author=unixorn" title="Code">💻</a> <a href="https://github.com/Bhupesh-V/ugit/commits?author=unixorn" title="Documentation">📖</a> <a href="#plugin-unixorn" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://thecesrom.dev/"><img src="https://avatars.githubusercontent.com/u/19418023?v=4?s=100" width="100px;" alt=""/><br /><sub><b>César Román</b></sub></a><br /><a href="https://github.com/Bhupesh-V/ugit/commits?author=thecesrom" title="Code">💻</a> <a href="https://github.com/Bhupesh-V/ugit/issues?q=author%3Athecesrom" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

