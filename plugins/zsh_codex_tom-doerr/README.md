<h1 align="center">⌨️ 🦾 Zsh Codex</h1>

<p align="center">
    AI in the command line.
</p>

<p align="center">
    <img src=''>
    <p align="center">
        You just need to write a comment or variable name and the AI will write the corresponding code.
    </p>
</p>


## What is it?

This is a ZSH plugin that enables you to use OpenAI's powerful Codex AI in the command line. OpenAI Codex is the AI that also powers GitHub Copilot.
To use this plugin you need to get access to OpenAI's [Codex API](https://openai.com/blog/openai-codex/).


## How do I install it?

1. Install the plugin with Fig by clicking the "Install" button above.

2. Install the OpenAI python package.
```
pip3 install openai
```

3. Create a file called `openaiapirc` in `~/.config` with your ORGANIZATION_ID and SECRET_KEY.

```
[openai]
organization_id = ...
secret_key = ...
```

5. Run `zsh`, start typing and complete it using `^X`!


## Troubleshooting 

### Unhandled ZLE widget 'create_completion'

```
zsh-syntax-highlighting: unhandled ZLE widget 'create_completion'
zsh-syntax-highlighting: (This is sometimes caused by doing `bindkey <keys> create_completion` without creating the 'create_completion' widget with `zle -N` or `zle -C`.)
```

Add the line 
```
zle -N create_completion
```
before you call `bindkey` but after loading the plugin (`plugins=(zsh_codex)`).

### Already exists and is not an empty directory
```
fatal: destination path '~.oh-my-zsh/custom/plugins'
```
Try to download the ZSH plugin again.
```
git clone https://github.com/tom-doerr/zsh_codex.git ~/.oh-my-zsh/custom/plugins/zsh_codex
```

## More examples of usage
<p align="center">
    <img src='https://github.com/tom-doerr/bins/raw/main/zsh_codex/update_insert/all.gif'>
    <p align="center">
    </p>
</p>

-------------------------------------------------------------------

[Fish Version](https://github.com/tom-doerr/codex.fish)

[Traffic Statistics](https://tom-doerr.github.io/github_repo_stats_data/tom-doerr/zsh_codex/latest-report/report.html)

