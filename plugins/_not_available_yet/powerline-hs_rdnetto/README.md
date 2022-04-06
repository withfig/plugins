# Powerline-hs
[![Build Status](https://travis-ci.org/rdnetto/powerline-hs.svg?branch=master)](https://travis-ci.org/rdnetto/powerline-hs)

Powerline-hs is a [Powerline](https://github.com/powerline/powerline) clone written in Haskell. It is significantly faster than the original implementation, and makes the shell noticeably more responsive.

## Benchmarks
Powerline-hs takes just 79.1 ms to render both prompts, in comparison to Powerline which took 1.25 seconds. (The execution time for a Python Hello World program is included for context.)

[![Complete benchmark](https://rdnetto.github.io/powerline-hs/bench.png)](https://rdnetto.github.io/powerline-hs/bench.html)
(Click on the graph for an interactive version.)

You can find the source for these benchmarks [here](https://github.com/rdnetto/powerline-hs/blob/master/bench/Bench.hs), and the Powerline configuration they were run against [here](https://github.com/rdnetto/oh-my-zsh/tree/master/powerline/config). To run the benchmarks, use:

    stack bench --benchmark-arguments '--output=bench.html -L 10'

## Limitations
Powerline-hs currently only supports shell prompt generation (Bash, ZSH). It does not support the following segments:

* `powerline.segments.common.net.network_load`
* `powerline.segments.common.wthr.weather`
* `powerline.segments.common.time.fuzzy_time`
* `powerline.segments.common.mail.email_imap_alert`
* `powerline.segments.common.players.*`

Support for other segments and usages may be added on request, time permitting. Pull requests are always welcome.

## Installation
You will need to have Powerline installed, since Powerline-hs uses its config files and shell scripts.

You can download a pre-compiled binary from the [Releases](https://github.com/rdnetto/powerline-hs/releases) page - just extract the tarball and you're good to go.

Alternatively, you can compile from source using [Stack](https://docs.haskellstack.org/en/stable/README/#how-to-install) with:

    stack install

## Configuration
Powerline-hs is intended to be a drop-in replacement for Powerline. This means that most of [Powerline's documentation](https://powerline.readthedocs.io/en/master/configuration.html#quick-setup-guide) still applies, and that it should produce the same output without any additional configuration. If it does not, please file a bug.

To try out Powerline-hs in your current shell, just run:

    export POWERLINE_COMMAND=$HOME/.local/bin/powerline-hs

(`~/.local/bin` is the path `stack install` copies it into - you may need to change it if you placed the executable somewhere else.)

To make it the default, add the following to your shell's RC file (e.g. `.zshrc`):

    POWERLINE_COMMAND=$HOME/.local/bin/powerline-hs
    POWERLINE_CONFIG_COMMAND=/bin/true
    source /usr/share/zsh/site-contrib/powerline.zsh

The path of the shell script will depend on where you have Powerline installed and which distro you are using.

### Git status
Powerline only provides a basic git information segment. There is an implementation [here](https://github.com/jaspernbrouwer/powerline-gitstatus) that adds a more advance git status support. Powerline-hs follows powerline-gistatus convention and only provides partial support. 

Features supported:

* n commits ahead. Colorscheme group `gitstatus_ahead`, e.g. `"gitstatus_ahead":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_ahead",
  "priority": 40
}
```

* n commits behind. Colorscheme group `gitstatus_behind`, e.g. `"gitstatus_behind":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_behind",
  "priority": 40
}
```

* n staged files. Colorscheme group `gitstatus_staged`, e.g. `"gitstatus_staged":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_staged",
  "priority": 40
}
```

* n unmerged files. Colorscheme group `gitstatus_unmerged`, e.g. `"gitstatus_unmerged":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_unmerged",
  "priority": 40
}
```

* n changed files. Colorscheme group `gitstatus_changed`, e.g. `"gitstatus_changed":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_changed",
  "priority": 40
}
```

* n untracked files. Colorscheme group `gitstatus_untracked`, e.g. `"gitstatus_untracked":{ "fg": "gray10", "bg": "gray2", "attrs": [] }`.

```
{
  "function": "powerline_gitstatus.gitstatus_untracked",
  "priority": 40
}
```

