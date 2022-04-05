# Toggl Plugin for zsh

## Features

:watch: get the total working hours of the current week with the `toggl-week`
  command:

```bash
$ toggl-week
$ You've worked 38 hours, 55 minutes and 46 seconds this week.
```

## Installation

### in your ~/.zshrc

- Download [`toggl.plugin.zsh`](./toggl.plugin.zsh) or clone this repository:

```bash
git clone https://github.com/natterstefan/toggl-zsh-plugin.git
```

- source the script **at the end** of `~/.zshrc`:

```bash
source /path/to/toggl-zsh-plugin/toggl.plugin.zsh
```

- source `~/.zshrc` to take changes into account:
  
```bash
source ~/.zshrc
```

### with oh-my-zsh

- Clone the repo in ["Oh My ZSH"](https://github.com/robbyrussell/oh-my-zsh)
  plugins directory:

```bash
git clone https://github.com/natterstefan/toggl-zsh-plugin.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/toggl
```

- Activate the plugin in `~/.zshrc` by adding `toggl` to the plugins section:

```bash
plugins=( [plugins...] toggl)
```

- source `~/.zshrc` to take changes into account:
  
```bash
source ~/.zshrc
```

### With antigen

Having [antigen](https://github.com/zsh-users/antigen) properly installed, just
run:

```bash
antigen natterstefan/toggl-zsh-plugin
```

## Setup

Add the following environment variables to your `~/.zshrc`:

```bash
# open https://toggl.com/app/workspaces. Select the workspace you want to use,
# click on the three dots and open "Settings". Get the id from the URL in your
# browser. Eg. https://toggl.com/app/workspaces/12345678/settings?
export TOGGL_WORKSPACE_ID="12345678"

# open https://www.toggl.com/app/projects and select the project(s) you want to
# use in the report. Again copy the id from the url. In this case
# https://www.toggl.com/app/projects/12345678/edit/98765 the id would be 98765.
# This value can look like: "98765" or "98765,43210" for multiple project ids.
export TOGGL_PROJECT_IDS="98765"

# open https://toggl.com/app/profile and get the API token from the bottom of
# the page
export TOGGL_API_TOKEN="eNw1y5uVyYfW3aSVhHDZCcyAZGDfvezi1DmxjVXo"
```

## Development

```bash
git clone https://github.com/natterstefan/toggl-zsh-plugin.git
mkdir ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/toggl
ls -s toggl.plugin.zsh ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/toggl/toggl.plugin.zsh
```

You are now ready to develop. After changing your code, you need to restart the
terminal or source `~/.zshrc` again. Don't forget to remove the symlink, in case
you start from [Installation](#Installation) again.

If this does not work, I recommend to create `tmp/test.sh` and make it
executable. Then copy and paste the code from [`toggl.plugin.zsh`](./toggl.plugin.zsh)
into the file. Now, make changes and test it with `./tmp/test.sh`. Once you are
done, copy the code back into [`toggl.plugin.zsh`](./toggl.plugin.zsh).

## Links

- [Oh My ZSH!](https://ohmyz.sh/)
- [Oh My ZSH! - Customization](https://github.com/robbyrussell/oh-my-zsh/wiki/Customization)
- [Toggl API Docs - Reports](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)
- [Toggl API Docs - Authentication](https://github.com/toggl/toggl_api_docs/blob/master/chapters/authentication.md)
- [Working with JSON in bash using `jq`](https://medium.com/cameron-nokes/working-with-json-in-bash-using-jq-13d76d307c4)

## Licence

[Apache 2.0](./LICENCE)

This extension is not affiliated, associated, authorized, endorsed by or in any
way officially connected to Toggl ([toggl.com](https://toggl.com)).

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/natterstefan">
          <img width="150" height="150" src="https://github.com/natterstefan.png?v=3&s=150">
          </br>
          Stefan Natter
        </a>
        <div>
          <a href="https://twitter.com/natterstefan">
            <img src="https://img.shields.io/twitter/follow/natterstefan.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>

