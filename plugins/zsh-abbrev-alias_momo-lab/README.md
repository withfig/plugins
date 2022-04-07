# zsh-abbrev-alias
This zsh plugin provides functionality similar to Vim's abbreviation expansion.

## Usage

```zsh
$ abbrev-alias -g G="| grep"
$ ps aux G<push space key>
->
$ ps aux | grep 
```

```zsh
$ git branch
* master
$ abbrev-alias -ge B='$(git symbolic-ref --short HEAD 2> /dev/null)'
$ git push origin B<push space key>
->
$ git push origin master 
```

```zsh
$ abbrev-alias d='docker'
$ d<push space key>
->
$ docker
$ abbrev-alias -r dr='d run --rm -it'
$ dr<push space key>
->
$ docker run --rm -it
```

## Notes
This plugin is compatible with https://github.com/MichaelAquilina/zsh-you-should-use,
you only need to source it first

## Help
Show `abbrev-alias --help`.

```zsh
$ abbrev-alias --help
abbrev-alias 0.3.0
USAGE:
  abbrev-alias [OPTIONS] {name=value ...}
  abbrev-alias -u {name ...}
  abbrev-alias --init

OPTIONS:
  -c, --command   register alias as 'alias name=value'
  -g, --global    register alias as 'alias -g name=value' like
  -e, --eval      evaluates subshells on expansion
  -r, --recursive expand aliases recursively
  -u, --unset     unregister alias
  -i, --init      initialize abbrev-alias. execute with .zshrc
  -h, --help      show this help
  -v, --version   show version
```

