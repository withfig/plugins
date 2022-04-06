# Passwordless ZSH history

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Installation](#installation)
  - [Customization](#customization)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This ZSH plugin masks secrets in your ZSH history

Example:

```bash
❯ curl -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5c' https://example.com
❯ curl -u foo:bar https://example.com
❯ curl https://foo:bar@example.com
❯ AWS_SECRET_ACCESS_KEY=key aws s3 ls s3://example
❯ export DB_PASSWORD=foo
❯ history | tail
 1  curl -H 'Authorization: ...' https://example.com > /dev/null
 2  curl -u ... https://example.com > /dev/null
 3  curl https://...@example.com > /dev/null
 4  AWS_SECRET_ACCESS_KEY=... aws s3 ls s3://example
 5  export DB_PASSWORD=...
```

ZSH will let you recover the previous command with secrets immediately after execution:

```bash
> curl http://username:password@github.com/foo
> # <up-arrow> recovers command with password immediately after execution
> # <up-arrow> recovers masked command here
```

To exclude _any_ command from history, prefix with a space. It behaves the same as above:
```bash
>  echo "prefixed with space"
> # available here on <up-arrow>
> # Not available here 
```

Control what secrets are catched by setting the environment variable `HISTORY_EXCLUDE_PATTERN`. If the pattern includes a single group, that group is substituted with `...`. The default `HISTORY_EXCLUDE_PATTERN` is

```bash
❯ echo $HISTORY_EXCLUDE_PATTERN
^ |//([^/]+:[^/]+)@|KEY[=:] *([^ ]+)|TOKEN[=:] *([^ ]+)|BEARER[=:] *([^ ]+)|PASSWO?R?D?[=:] *([^ ]+)|Authorization[=:] *([^'\"]+)|-us?e?r? ([^:]+:[^:]+) 
```

it is not case sensitive

## Installation

Using **Plain zsh**

Download [passwordless-history.plugin.zsh](passwordless-history.plugin.zsh), then add to `.zshrc`

```
source /path/to/passwordless-history.plugin.zsh
```

Using [**Antibody**](https://getantibody.github.io)

```
antibody bundle jgogstad/passwordless-history
```

Using [**ZInit**](https://github.com/zdharma/zinit)

Add the following to `.zshrc`

```bash
zinit light jgogstad/passwordless-history
```

Using [**ZPlug**](https://github.com/zplug/zplug)

Add the following to `.zshrc`

```bash
zplug 'jgogstad/passwordless-history'
```


## Customization

Overwrite `HISTORY_EXCLUDE_PATTERN` to customize:

```bash
❯ export HISTORY_EXCLUDE_PATTERN="^ykchalresp|$HISTORY_EXCLUDE_PATTERN"
```

The pattern is a regex and it's evaluated with zsh's `=~` operator using case insensitive evaluation.

