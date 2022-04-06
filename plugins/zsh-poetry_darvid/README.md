[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
![ZSH 5.0.2+](https://img.shields.io/badge/zsh-v5.0.2-orange.svg)

# zsh-poetry
Automatically activates virtual environments created by [Poetry] when
changing to a project directory with a valid ``pyproject.toml``.

[Poetry]: https://poetry.eustace.io/
[pyenv]: https://github.com/pyenv/pyenv



## Install
```
curl -L git.io/Jinm5 > poetry.zsh
source poetry.zsh
```


### Antigen
```
antigen bundle darvid/zsh-poetry
```


### zplug
```
zplug "darvid/zsh-poetry"
```


## Configuration

**Options:**
* `ZSH_POETRY_AUTO_ACTIVATE` (default: `1`): if set, automatically
  activates virtual environments in valid project directories when
  changing directories.
* `ZSH_POETRY_AUTO_DEACTIVATE` (default: `1`): if set, automatically
  deactivates virtual environments when moving out of project directories.

