**A lovely zsh theme that's fast and has responsive design. Simple but useful**

<p align="center">
  <img src="https://raw.githubusercontent.com/zthxxx/jovial/master/docs/jovial.png" alt="jovial" width="720">
</p>

## Customization

You can customize the prompt display with the following variables:
- [`JOVIAL_SYMBOL`](#symbols)
- [`JOVIAL_PALETTE`](#colors)
- [`JOVIAL_PROMPT_ORDER`](#order-of-parts)
- [`JOVIAL_PROMPT_PRIORITY`](#priority-of-parts)
- [`JOVIAL_AFFIXES`](#affixes)
- [`JOVIAL_EXEC_THRESHOLD_SECONDS`](#execute-elapsed)
- [`JOVIAL_DEV_ENV_DETECT_FUNCS`](#detect-development-env)


### symbols

```zsh
JOVIAL_SYMBOL=(
    corner.top    '╭─'
    corner.bottom '╰─'

    git.dirty '✘✘✘'
    git.clean '✔'

    arrow '─➤'
    arrow.git-clean '(๑˃̵ᴗ˂̵)و'
    arrow.git-dirty '(ﾉ˚Д˚)ﾉ'
)
```

### colors

```zsh
# jovial theme colors mapping
# use `sheet:color` plugin function to see color table
# https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Visual-effects
JOVIAL_PALETTE=(
    # hostname
    host '%F{157}'

    # common user name
    user '%F{253}'

    # only root user
    root '%B%F{203}'

    # current work dir path
    path '%B%F{228}%}'

    # git status info (dirty or clean / rebase / merge / cherry-pick)
    git '%F{159}'

    # virtual env activate prompt for python
    venv '%F{159}'
 
    # current time when prompt render, pin at end-of-line
    time '%F{254}'

    # elapsed time of last command executed
    elapsed '%F{222}'

    # exit code of last command
    exit.mark '%F{246}'
    exit.code '%B%F{203}'

    # 'conj.': short for 'conjunction', like as, at, in, on, using
    conj. '%F{102}'

    # shell typing area pointer
    typing '%F{252}'

    # for other common case text color
    normal '%F{252}'

    success '%F{040}'
    error '%F{203}'
)
```

Reference:

```text
%F{xxx}    => foreground color (text color)
%K{xxx}    => background color (color-block)
%B         => blod
%U         => underline
```

You can run the `sheet:color` function provided by this plugin to display
a color sheet in your terminal that can help get the corresponding numbers
to configure colors.

### order of parts

Prompt parts display order can be configured with `JOVIAL_PROMPT_ORDER`.

```zsh
JOVIAL_PROMPT_ORDER=(host user path dev-env git-info)
```

### priority of parts

In `responsive design` mode, prompt parts can be set in the priority list `JOVIAL_PROMPT_PRIORITY`,

```zsh
JOVIAL_PROMPT_PRIORITY=(path git-info user host dev-env)
```

### affixes

Prefixes and suffixes of jovial prompt part.

```zsh
JOVIAL_AFFIXES=(
    host.prefix            '${JOVIAL_PALETTE[normal]}['
    host.suffix            '${JOVIAL_PALETTE[normal]}] ${JOVIAL_PALETTE[conj.]}as'

    user.prefix            ' '
    user.suffix            ' ${JOVIAL_PALETTE[conj.]}in'

    path.prefix            ' '
    path.suffix            ''

    dev-env.prefix         ' '
    dev-env.suffix         ''

    git-info.prefix        ' ${JOVIAL_PALETTE[conj.]}on ${JOVIAL_PALETTE[normal]}('
    git-info.suffix        '${JOVIAL_PALETTE[normal]})'

    venv.prefix            '${JOVIAL_PALETTE[normal]}('
    venv.suffix            '${JOVIAL_PALETTE[normal]}) '

    exec-elapsed.prefix    ' ${JOVIAL_PALETTE[elapsed]}~'
    exec-elapsed.suffix    ' '

    exit-code.prefix       ' ${JOVIAL_PALETTE[exit.mark]}exit:'
    exit-code.suffix       ' '

    current-time.prefix    ' '
    current-time.suffix    ' '
)
```

### execute elapsed

The threshold in seconds for last command execute elapsed time:

```zsh
JOVIAL_EXEC_THRESHOLD_SECONDS=4
```

set to `-1` if you want to disable.

### detect development env

`JOVIAL_DEV_ENV_DETECT_FUNCS` is a list of function to detect development env.

```zsh
JOVIAL_DEV_ENV_DETECT_FUNCS=()
```
