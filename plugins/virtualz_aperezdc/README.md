# VirtualZ

A [Z shell](http://zsh.org) wrapper for Ian Bicking's
[virtualenv](https://virtualenv.pypa.io/en/latest/), loosely based on Adam
Brenecki's [virtualfish](https://github.com/adambrenecki/virtualfish) for the
[Fish shell](http://fishshell.com).


## Quickstart

Once installed, VirtualZ provides the `vz` command. Try the following:

```
vz new myvirtualenv
echo ${VIRTUAL_ENV}
which python
vz new othervirtualenv
echo ${VIRTUAL_ENV}
vz deactivate
vz rm myvirtualenv
vz rm othervirtualenv
```

### Additional Options

When creating a new environment, the additional parameters passed to the `vz
new` command are passed down to the `virtualenv` command. For example, this
can be used to specify which `python` executable to use:

```
vz new env-with-pypy -p /usr/bin/pypy
```

or to allow usage of packages installed system-wide:

```
vz new with-system-pkgs --system-site-packages
```


## Installation & Setup

The recommended way is to use a plugin manager. By default, the location where VirtualZ looks for virtualenvs is `~/.virtualenvs`. This can be changed by setting the desired path in the `${VIRTUALZ_HOME}` variable.

With [zgen](https://github.com/tarjoilija/zgen), add the following to your `.zshrc`:

```sh
zgen load aperezdc/virtualz
```


### Virtualenv name in the prompt

When a virtualenv is active, the following variables are defined:

- `VIRTUAL_ENV` contains the full path to the active environment.
- `VIRTUAL_ENV_NAME` contains the name of the active environment.

For example, the following will prepend the name of the current virtualenv to your existing prompt, but only if there's an environment active:

```sh
PROMPT='${VIRTUAL_ENV_NAME:+${VIRTUAL_ENV_NAME} }${PROMPT}'
```

