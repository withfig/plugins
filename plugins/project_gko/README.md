# Project

Create `npm`, `cargo`, `gem` or `pip` project locally and on `github` or just `cd` into existing.

![demo](https://github.com/gko/project/raw/master/demo.png)

After project init you will be prompted to create a `github` repo (private or public).

![github](https://github.com/gko/project/raw/master/github.png)

You can read more about it in the «[Managing your projects](https://dev.to/konstantin/managing-your-projects-31p1)» article.

## Installation

You will need to install ~~hub~~ [github cli](https://cli.github.com/) (see this [PR](https://github.com/gko/project/pull/7)) in order to create project repository on `github`.

### With [antigen](https://github.com/zsh-users/antigen)

In your .zshrc
```sh
antigen bundle gko/project
```

### Manually

You need to clone repo:

```bash
git clone --recursive --depth 1 https://github.com/gko/project
```
then add it to .bashrc or .zshrc:
```bash
source ./project/project.sh
```

## Usage
```
Usage: project [options]
Example:
  project -p test
Options:
  -h, --help      help
  -p, --private   create private github repository
  -f, --folder    your projects folder(defaults to ~/projects)
  -n, --no-init   avoid initializing package
```

then to create public repo:
```bash
project test
```

create private repo:
```bash
project -p test
```

If the project exist you will just `cd` into its folder.

If no name is given you will just `cd` to `projects` folder.

If you type `project -` then you'll jump to previous project folder.

### Autocomplete

Supports `zsh-autocomplete`. On <kbd>Tab</kbd> will show the list of available projects.

You can also alias it (in `~/.zshrc` or `~/.bashrc`):
```shell
alias p='project'
```

to get:
```shell
p test-project
```

### Projects path

You can specify projects path by either `-f` key or `$PROJECTS_HOME` variable:
```bash
project -f /projects_path
```
or
```bash
export PROJECTS_HOME=/projects_path
```
Otherwise default path is `~/projects`

## Like it?

:star: this repo

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2019 Konstantin Gorodinskiy

