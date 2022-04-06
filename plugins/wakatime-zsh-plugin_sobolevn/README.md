## What does this plugin do?

This plugin provides `zsh` and `wakatime` integration. In other words, it tracks all time you spend in a terminal. Unlike other plugins, this one tries to keep all your spent time in the same `wakatime`'s project.

![Info](https://github.com/sobolevn/wakatime-zsh-plugin/blob/master/info.png)


## Prerequisites

Before we start you will need to run:

```bash
pip install 'wakatime>=12.0'
```

This command will install [Wakatime's CLI](https://github.com/wakatime/wakatime).

## wakatime

Official plugin [documentation](https://github.com/robbyrussell/oh-my-zsh/wiki/Customization#adding-a-new-plugin)

## Configuration

Wakatime supports configuration via [`~/.wakatime.cfg`](https://github.com/wakatime/wakatime#configuring). You will need to set your `api_key`.

There are number of options to set via your environment variables:

- `$WAKATIME_DO_NOT_TRACK`: you can also disable tracking for some period of time by setting `WAKATIME_DO_NOT_TRACK=1`. defaults to `false`
- `$WAKATIME_TIMEOUT`: to limit the time to sync with the `wakatime` servers, defaults to `5` seconds
- `$WAKATIME_DISABLE_OFFLINE`: to disable `wakatime` in offline mode, defaults to `false`
- `$ZSH_WAKATIME_BIN`: set a custom path for the wakatime cli, defaults to `wakatime`

## Alternatives

There are several alternatives to this project:

1. [`zsh-wakatime`](https://github.com/wbingli/zsh-wakatime/blob/master/zsh-wakatime.plugin.zsh)
2. [`bash-wakatime`](https://github.com/gjsheep/bash-wakatime)
3. [`fish-wakatime`](https://github.com/Cyber-Duck/fish-wakatime)

See the full list [here](https://wakatime.com/terminal).


