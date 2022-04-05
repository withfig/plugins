# zsh-arc

> zsh plugin with aliases for Yandex version control system `arc`

https://habr.com/ru/company/yandex/blog/482926/

## Installation

### [Antigen]

[Antigen]: https://github.com/zsh-users/antigen

```
antigen bundle anton-rudeshko/zsh-arc
```

Or add to your `.antigenrc`:

```
antigen bundles <<EOBUNDLES
    …
    anton-rudeshko/zsh-arc
    …
EOBUNDLES
```

Then run:

```bash
antigen update
antigen reset
```

Reopen your shell.

## Usage

Keep in mind that there are utilities shadowed with aliases:

```console
$ which -a $(alias | grep -oE "^a[^=]*") | grep -v arc
a: aliased to fasd -a
/usr/sbin/ab
/usr/sbin/ac
afind: aliased to ack -il
/usr/sbin/amt
```

Run shadowed commands via `command cmd` or `\cmd`.

### Aliases

| Alias | Command |
|:---|:---|
| `aa`       | `arc add` |
| `aaa`      | `arc add --all` |
| `aapa`     | `arc add --patch` |
| `aau`      | `arc add --update` |
| `aav`      | `arc add --verbose` |
| `ab`       | `arc branch` |
| `aba`      | `arc branch --all` |
| `abd`      | `arc branch --delete` |
| `abda`     | `arc branch --merged \| command grep -vE "^(\+\|\*\|\s*(trunk)\s*$)" \| command xargs -n 1 arc branch -d` |
| `abD`      | `arc branch -D` |
| `abl`      | `arc blame` |
| `ac`       | `arc commit` |
| `ac!`      | `arc commit --amend` |
| `acn!`     | `arc commit --no-edit --amend` |
| `aca`      | `arc commit --all` |
| `aca!`     | `arc commit --all --amend` |
| `acan!`    | `arc commit --all --no-edit --amend` |
| `acam`     | `arc commit --all --message` |
| `acb`      | `arc checkout -b` |
| `aclean`   | `arc clean -d` |
| `apristine`| `arc reset --hard $(arc_current_branch) && arc clean -dx` |
| `act`      | `arc checkout trunk` |
| `acmsg`    | `arc commit --message` |
| `aco`      | `arc checkout` |
| `acp`      | `arc cherry-pick` |
| `acpa`     | `arc cherry-pick --abort` |
| `acpc`     | `arc cherry-pick --continue` |
| `acps`     | `arc cherry-pick --skip` |
| `ad`       | `arc diff` |
| `adca`     | `arc diff --cached` |
| `ads`      | `arc diff --staged` |
| `af`       | `arc fetch` |
| `afa`      | `arc fetch --all` |
| `afg`      | `arc ls-files \| grep` |
| `agpull`   | `arc pull "$(arc_current_branch)"` |
| `agpush`   | `arc push "$(arc_current_branch)"` |
| `agsup`    | `arc branch --set-upstream-to=arcadia/$(arc_current_branch)` |
| `apsup`    | `arc push --set-upstream arcadia $(arc_current_branch)` |
| `al`       | `arc pull` |
| `alg`      | `arc log --stat` |
| `algg`     | `arc log --graph` |
| `algm`     | `arc log --graph --max-count=10` |
| `alo`      | `arc log --oneline` |
| `alols`    | `arc log --graph --stat` |
| `alog`     | `arc log --oneline --graph` |
| `amt`      | `arc mergetool --no-prompt` |
| `amtvim`   | `arc mergetool --no-prompt --tool=vimdiff` |
| `ap`       | `arc push` |
| `apf!`     | `arc push --force` |
| `apr`      | `arc pr` |
| `aprc`     | `arc pr create` |
| `aprco`    | `arc pr checkout` |
| `aprl`     | `arc pr list` |
| `aprla`    | `arc pr list --all` |
| `aprv`     | `arc pr view` |
| `aprs`     | `arc pr status` |
| `arb`      | `arc rebase` |
| `arba`     | `arc rebase --abort` |
| `arbc`     | `arc rebase --continue` |
| `arbi`     | `arc rebase --interactive` |
| `arbs`     | `arc rebase --skip` |
| `arev`     | `arc revert` |
| `arh`      | `arc reset` |
| `arhh`     | `arc reset --hard` |
| `aroh`     | `arc reset arcadia/$(arc_current_branch) --hard` |
| `arm`      | `arc rm` |
| `armc`     | `arc rm --cached` |
| `ars`      | `arc restore` |
| `arss`     | `arc restore --source` |
| `art`      | `cd "$(arc root \|\| echo .)"` |
| `aru`      | `arc reset --` |
| `asb`      | `arc status -sb` |
| `ash`      | `arc show --no-decorate` |
| `ashd`     | `arc show` |
| `ass`      | `arc status -s` |
| `ast`      | `arc status` |
| `astaa`    | `arc stash apply` |
| `astc`     | `arc stash clear` |
| `astd`     | `arc stash drop` |
| `astl`     | `arc stash list` |
| `astp`     | `arc stash pop` |
| `asts`     | `arc stash show` |
| `ats`      | `arc tag -s` |
| `atv`      | `arc tag \| sort -V` |
| `aunwip`   | `arc log -n 1 \| grep -q -c "\-\-wip\-\-" && arc reset HEAD~1` |
| `awip`     | `arc add -A; arc rm $(arc ls-files --deleted) 2> /dev/null; arc commit --message "--wip-- [skip ci]"` |

## Development

```
/Users/rudeshko/dev/zsh-arc --no-local-clone
```

It is necessary to use absolute path.

