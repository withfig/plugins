# zsh-autoquoter

zsh-autoquoter is a `zle` widget ("zsh plugin") that will automatically put quotes around arguments to certain commands. So instead of having to decide which type of quotes to suffer through:

```
$ git commit -m 'we haven'\''t seen the last of this "feature"'
$ git commit -m "we haven't seen the last of this \"feature\""
```

You can just write English:

```
$ git commit -m we haven't seen the last of this "feature"
```

And let zsh-autoquoter do the rest.

And if you use [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting), it'll even highlight these "autoquoted strings" distinctly, so you'll never be surprised when zsh-autoquoter fires.

# Behavior

Configure command prefixes that you want to be autoquoted by setting the `ZAQ_PREFIXES` array in your `~/.zshrc`:

```zsh
ZAQ_PREFIXES=('git commit -m' 'ssh *')
```

**By default this array is empty.** You need to opt into autoquote behavior.

`ZAQ_PREFIXES` is an array of *shell patterns* that will be matched against your input.

Shell patterns are kind of like goofy regular expressions, where `*` means `.*` and `#` means `*` and `##` means `+`. So while `git commit -m` would work as a pattern to match a literal prefix, I would suggest this more flexible alternative:

```zsh
ZAQ_PREFIXES+=('git commit( [^ ]##)# -[^ -]#m')
```

```
git commit -a -m hi hello
                 ^^^^^^^^
git commit -am hi hello
               ^^^^^^^^
git commit -m hi hello
              ^^^^^^^^
```

And while `ssh *` will "skip one argument" and then quote the rest, you should probably use a pattern that allows flags and triggers after the first positional argument:

```zsh
ZAQ_PREFIXES+=('ssh( [^ ]##)# [^ -][^ ]#')
```

```
ssh -Y user@host some 'complex' * | remote <"command"
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

## Writing patterns

Wow those are complicated, huh? Yeah. And they're not even very complete: for example, you can't type:

    ssh 'some hostname with a space in it' something

Because the pattern doesn't recognize that `'some hostname with a space in it'` is a single positional argument. Patterns operate on *characters*, even though we think about command arguments in terms of *words*. But parsing those out would be a whole thing.

Note that `[^ -][^ ]#` at the end of a pattern matches exactly one positional argument because zsh-autoquoter always adds an implicit space to the end of your patterns, and searches for the shortest matching prefix.

You can debug a pattern using the following expression:

    setopt EXTENDED_GLOB
    input='ssh user@host some command'
    prefix='ssh( [^ ]##)# [^ -][^ ]#'
    print ${input#$~prefix }

Which is exactly how zsh-autoquoter is implemented. If that prints the entire `input` string, your pattern didn't work. If it only prints a subset of it, then that is the subset that will be autoquoted.

See section [14.8.1 Glob Operators](https://zsh.sourceforge.io/Doc/Release/Expansion.html#Glob-Operators) for a more thorough description of pattern syntax.

## Special characters

zsh-autoquoter runs before your shell has a chance to expand or glob or parse the command you typed, so it works to quote any shell syntax:

```
$ ssh user@host * globs and | pipes and > redirects and # comments oh my
```

There is one exception:

## Double escaping

zsh-autoquoter won't add quotes if there already are quotes, so you can still type:

```
$ git commit -m 'i forgot that i installed zaq'
```

And it will not double-escape anything.

When doing this check, zsh-autoquoter will look for a *fully quoted* argument string. So you can still write:

```
$ git commit -m 'twas the night before christmas
$ git commit -m "fix" the latest "bug"
```

And it will be autoquoted correctly.

I *highly* recommend enabling syntax highlighting (see below) to make it obvious when zsh-autoquoter is going to fire and when it is not.

## History

Commands will be rewritten *before* they're added to history, so your `~/.zsh_history` will reflect an accurate list of commands you *ran*, not commands you *typed*. But because zsh-autoquoter ignores already-quoted entries, you can always up-enter and re-run the same command.

Yes, you could imagine wanting it the other way, but I just cannot figure out how to make that work with zsh.

# Installation

## Manually

Download `zsh-autoquoter.zsh` and source it from your `~/.zshrc` file. Then make sure that you add some prefixes:

```zsh
source ~/src/zsh-autoquoter/zsh-autoquoter.zsh
ZAQ_PREFIXES=('git commit -m' 'git commit -am')
```

## [Antigen](https://github.com/zsh-users/antigen):

```
$ antigen bundle ianthehenry/zsh-autoquoter
```

## [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh):

Clone this repo into your custom plugins directory:

```
$ git clone https://github.com/ianthehenry/zsh-autoquoter.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autoquoter
```

And then add it to the plugins list in your `~/.zshrc` before you source `oh-my-zsh`:

```
plugins+=(zsh-autoquoter)
source "$ZSH/oh-my-zsh.sh"
```

# Syntax highlighting

If you use the excellent [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) package, you can enable the `zaq` highlighter by adding the following line to your `~/.zshrc`:

```zsh
ZSH_HIGHLIGHT_HIGHLIGHTERS+=(zaq)
```

You can customize how it looks by setting the `zaq:string` key:

```zsh
ZSH_HIGHLIGHT_STYLES[zaq:string]="fg=green,underline"
```

If you *don't* use zsh-syntax-highlighting, you should check it out. It's great. You'll never typo a command again.

# hey why don't you just write better commit messages

Okay yeah look I'm using `git commit -m` as an example a lot, but zsh-autoquoter was originally written so I could add notes and todo list items from the command line more easily. Not to say that `git commit -m` is *bad* -- it's great if you're using a [patch queue workflow](https://github.com/mystor/git-revise). But zsh-autoquoter does not condone vague one-line commit messages.

