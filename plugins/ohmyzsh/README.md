<!-- <p align="center"><img src="https://ohmyzsh.s3.amazonaws.com/omz-ansi-github.png" alt="Oh My Zsh"></p> -->

Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

Sounds boring. Let's try again.

**Oh My Zsh will not make you a 10x developer...but you may feel like one.**

Once installed, your terminal shell will become the talk of the town _or your money back!_ With each keystroke in your command prompt, you'll take advantage of the hundreds of powerful plugins and beautiful themes. Strangers will come up to you in cafés and ask you, _"that is amazing! are you some sort of genius?"_

Finally, you'll begin to get the sort of attention that you have always felt you deserved. ...or maybe you'll use the time that you're saving to start flossing more often. 😬


## Getting Started

### Prerequisites

- A Unix-like operating system: macOS, Linux, BSD. On Windows: WSL2 is preferred, but cygwin or msys also mostly work.
- [Zsh](https://www.zsh.org) should be installed (v4.3.9 or more recent is fine but we prefer 5.0.8 and newer). If not pre-installed (run `zsh --version` to confirm), check the following wiki instructions here: [Installing ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- `curl` or `wget` should be installed
- `git` should be installed (recommended v2.4.11 or higher)

#### Manual inspection

It's a good idea to inspect the install script from projects you don't yet know. You can see the install script at the following URL:

```sh
https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
```

## Using Oh My Zsh

### Plugins

Oh My Zsh comes with a shitload of plugins for you to take advantage of. 

<details>
<summary>Click here to see all Plugins</summary>

- [1password](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/1password)
- [adb](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/adb)
- [ag](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ag)
- [aliases](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/aliases)
- [alias-finder](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/alias-finder)
- [ansible](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ansible)
- [ant](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ant)
- [apache2-macports](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/apache2-macports)
- [arcanist](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/arcanist)
- [archlinux](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/archlinux)
- [asdf](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf)
- [autoenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/autoenv)
- [autojump](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/autojump)
- [autopep8](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/autopep8)
- [aws](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/aws)
- [battery](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/battery)
- [bazel](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bazel)
- [bbedit](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bbedit)
- [bedtools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bedtools)
- [bgnotify](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bgnotify)
- [boot2docker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/boot2docker)
- [bower](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bower)
- [branch](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/branch)
- [brew](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/brew)
- [bundler](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bundler)
- [cabal](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cabal)
- [cake](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cake)
- [cakephp3](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cakephp3)
- [capistrano](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/capistrano)
- [cask](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cask)
- [catimg](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/catimg)
- [celery](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/celery)
- [chruby](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/chruby)
- [chucknorris](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/chucknorris)
- [cloudfoundry](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cloudfoundry)
- [codeclimate](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/codeclimate)
- [coffee](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/coffee)
- [colemak](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colemak)
- [colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colored-man-pages)
- [colorize](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colorize)
- [command-not-found](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found)
- [common-aliases](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/common-aliases)
- [compleat](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/compleat)
- [composer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/composer)
- [copybuffer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copybuffer)
- [copydir](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copydir)
- [copyfile](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copyfile)
- [cp](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cp)
- [cpanm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cpanm)
- [dash](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dash)
- [debian](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/debian)
- [deno](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/deno)
- [dircycle](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dircycle)
- [direnv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/direnv)
- [dirhistory](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dirhistory)
- [dirpersist](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dirpersist)
- [dnf](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dnf)
- [dnote](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dnote)
- [docker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker)
- [docker-compose](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker-compose)
- [docker-machine](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker-machine)
- [doctl](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/doctl)
- [dotenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv)
- [dotnet](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotnet)
- [droplr](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/droplr)
- [drush](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/drush)
- [eecms](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/eecms)
- [emacs](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/emacs)
- [ember-cli](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ember-cli)
- [emoji](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/emoji)
- [emoji-clock](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/emoji-clock)
- [emotty](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/emotty)
- [encode64](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/encode64)
- [extract](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/extract)
- [fabric](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fabric)
- [fancy-ctrl-z](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fancy-ctrl-z)
- [fasd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fasd)
- [fastfile](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fastfile)
- [fbterm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fbterm)
- [fd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fd)
- [fig](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fig)
- [firewalld](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/firewalld)
- [flutter](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/flutter)
- [fnm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fnm)
- [forklift](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/forklift)
- [fossil](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fossil)
- [frontend-search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/frontend-search)
- [fzf](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fzf)
- [gas](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gas)
- [gatsby](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gatsby)
- [gb](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gb)
- [gcloud](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gcloud)
- [geeknote](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/geeknote)
- [gem](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gem)
- [genpass](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/genpass)
- [gh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gh)
- [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)
- [git-auto-fetch](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-auto-fetch)
- [git-escape-magic](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-escape-magic)
- [git-extras](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-extras)
- [gitfast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitfast)
- [git-flow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow)
- [git-flow-avh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow-avh)
- [github](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/github)
- [git-hubflow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-hubflow)
- [gitignore](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitignore)
- [git-lfs](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-lfs)
- [git-prompt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-prompt)
- [glassfish](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/glassfish)
- [globalias](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/globalias)
- [gnu-utils](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gnu-utils)
- [golang](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/golang)
- [gpg-agent](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gpg-agent)
- [gradle](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gradle)
- [grails](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/grails)
- [grc](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/grc)
- [grunt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/grunt)
- [gulp](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gulp)
- [hanami](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/hanami)
- [helm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/helm)
- [heroku](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/heroku)
- [history](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/history)
- [history-substring-search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/history-substring-search)
- [hitchhiker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/hitchhiker)
- [hitokoto](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/hitokoto)
- [homestead](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/homestead)
- [httpie](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/httpie)
- [invoke](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/invoke)
- [ionic](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ionic)
- [ipfs](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ipfs)
- [isodate](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/isodate)
- [istioctl](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/istioctl)
- [iterm2](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/iterm2)
- [jake-node](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jake-node)
- [jenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jenv)
- [jfrog](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jfrog)
- [jhbuild](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jhbuild)
- [jira](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jira)
- [jruby](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jruby)
- [jsontools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jsontools)
- [juju](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/juju)
- [jump](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jump)
- [kate](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kate)
- [keychain](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/keychain)
- [kitchen](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kitchen)
- [kn](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kn)
- [knife](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/knife)
- [knife_ssh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/knife_ssh)
- [kops](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kops)
- [kubectl](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kubectl)
- [kubectx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kubectx)
- [kube-ps1](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/kube-ps1)
- [lando](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lando)
- [laravel](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/laravel)
- [laravel4](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/laravel4)
- [laravel5](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/laravel5)
- [last-working-dir](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/last-working-dir)
- [lein](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lein)
- [lighthouse](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lighthouse)
- [lol](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lol)
- [lpass](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lpass)
- [lxd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/lxd)
- [macos](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/macos)
- [macports](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/macports)
- [magic-enter](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/magic-enter)
- [man](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/man)
- [marked2](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/marked2)
- [mercurial](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mercurial)
- [meteor](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/meteor)
- [microk8s](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/microk8s)
- [minikube](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/minikube)
- [mix](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mix)
- [mix-fast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mix-fast)
- [mongocli](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mongocli)
- [mosh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mosh)
- [mvn](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mvn)
- [mysql-macports](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mysql-macports)
- [n98-magerun](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/n98-magerun)
- [nanoc](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nanoc)
- [ng](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ng)
- [nmap](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nmap)
- [node](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/node)
- [nomad](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nomad)
- [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm)
- [nvm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nvm)
- [oc](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/oc)
- [octozen](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/octozen)
- [operator-sdk](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/operator-sdk)
- [otp](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/otp)
- [pass](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pass)
- [paver](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/paver)
- [pep8](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pep8)
- [percol](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/percol)
- [per-directory-history](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/per-directory-history)
- [perl](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/perl)
- [perms](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/perms)
- [phing](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/phing)
- [pip](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pip)
- [pipenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pipenv)
- [pj](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pj)
- [please](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/please)
- [pm2](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pm2)
- [pod](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pod)
- [poetry](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/poetry)
- [postgres](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/postgres)
- [pow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pow)
- [powder](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/powder)
- [powify](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/powify)
- [profiles](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/profiles)
- [pyenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pyenv)
- [pylint](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pylint)
- [python](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/python)
- [rails](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rails)
- [rake](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rake)
- [rake-fast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rake-fast)
- [rand-quote](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rand-quote)
- [rbenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rbenv)
- [rbfu](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rbfu)
- [rbw](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rbw)
- [react-native](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/react-native)
- [rebar](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rebar)
- [redis-cli](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/redis-cli)
- [repo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/repo)
- [ripgrep](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ripgrep)
- [ros](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ros)
- [rsync](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rsync)
- [ruby](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ruby)
- [rust](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rust)
- [rvm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rvm)
- [safe-paste](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/safe-paste)
- [salt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/salt)
- [samtools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/samtools)
- [sbt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sbt)
- [scala](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/scala)
- [scd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/scd)
- [screen](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/screen)
- [scw](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/scw)
- [sdk](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sdk)
- [sfdx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sfdx)
- [sfffe](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sfffe)
- [shell-proxy](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/shell-proxy)
- [shrink-path](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/shrink-path)
- [singlechar](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/singlechar)
- [spring](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/spring)
- [sprunge](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sprunge)
- [ssh-agent](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ssh-agent)
- [stack](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/stack)
- [sublime](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sublime)
- [sublime-merge](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sublime-merge)
- [sudo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo)
- [supervisor](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/supervisor)
- [suse](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/suse)
- [svcat](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/svcat)
- [svn](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/svn)
- [svn-fast-info](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/svn-fast-info)
- [swiftpm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/swiftpm)
- [symfony](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/symfony)
- [symfony2](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/symfony2)
- [systemadmin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/systemadmin)
- [systemd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/systemd)
- [taskwarrior](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/taskwarrior)
- [terminitor](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/terminitor)
- [term_tab](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/term_tab)
- [terraform](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/terraform)
- [textastic](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/textastic)
- [textmate](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/textmate)
- [thefuck](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/thefuck)
- [themes](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/themes)
- [thor](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/thor)
- [tig](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tig)
- [timer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/timer)
- [tmux](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tmux)
- [tmux-cssh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tmux-cssh)
- [tmuxinator](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tmuxinator)
- [torrent](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/torrent)
- [transfer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/transfer)
- [tugboat](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/tugboat)
- [ubuntu](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ubuntu)
- [ufw](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/ufw)
- [universalarchive](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/universalarchive)
- [urltools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/urltools)
- [vagrant](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vagrant)
- [vagrant-prompt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vagrant-prompt)
- [vault](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vault)
- [vim-interaction](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vim-interaction)
- [vi-mode](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vi-mode)
- [virtualenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/virtualenv)
- [virtualenvwrapper](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/virtualenvwrapper)
- [volta](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/volta)
- [vscode](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vscode)
- [vundle](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/vundle)
- [wakeonlan](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/wakeonlan)
- [wd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/wd)
- [web-search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/web-search)
- [wp-cli](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/wp-cli)
- [xcode](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/xcode)
- [yarn](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/yarn)
- [yii](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/yii)
- [yii2](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/yii2)
- [yum](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/yum)
- [z](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/z)
- [zbell](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zbell)
- [zeus](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zeus)
- [zoxide](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zoxide)
- [zsh-interactive-cd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zsh-interactive-cd)
- [zsh-navigation-tools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/zsh-navigation-tools)

#### Deprecated Plugins:

- [cargo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cargo): moved to the `rust` plugin.
- [npx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npx): new npm versions (>=7.0.0) do not provide the same functionality.
- [osx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/osx): renamed to `macos`.
- [rustup](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rustup): moved to the `rust` plugin.

#### Removed Plugins

- cloudapp: removed due to [deprecated API](https://github.com/cloudapp/api#note-the-api-is-no-longer-supported).
- django: removed because Zsh provides a better completion for Django.
- fedora: use `dnf` instead.
- git-remote-branch: not actively maintained.
- go: use `golang` instead.
- nyan: the service that the plugin relied on is no longer available.
- zsh_reload: functionality baked into the CLI with `omz reload`.

</details>

To see the plugins in the git repo, see [https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins)


#### Enabling Plugins

Go to the configurations tab, go to the **Plugins** configuration, and select the plugins you want to install.

Popular plugins include: `git`, `macos`, `ruby` etc


#### Using Plugins

Each plugin includes a **README**, documenting it. This README should show the aliases (if the plugin adds any) and extra goodies that are included in that particular plugin.

### Themes


We'll admit it. Early in the Oh My Zsh world, we may have gotten a bit too theme happy. We have over one hundred and fifty themes now bundled. 


<details>
<summary>Click here to see screenshots of all the themes</summary>

### robbyrussell

*The default that Robby Russell uses.*

![robbyrussell](https://user-images.githubusercontent.com/49100982/108254738-764b8700-716c-11eb-9a59-4deb8c8c6193.jpg)

----

The rest of the themes, in alphabetical order:

## A

### af-magic

![af-magic](https://user-images.githubusercontent.com/49100982/108254742-76e41d80-716c-11eb-89b0-09445ce76ff0.jpg)

### afowler

![afowler](https://user-images.githubusercontent.com/49100982/108254744-777cb400-716c-11eb-9407-1463775bbc25.jpg)

### agnoster

![agnoster](https://user-images.githubusercontent.com/49100982/108254745-777cb400-716c-11eb-800a-a8cfa612253f.jpg)

[Official repository](https://github.com/agnoster/agnoster-zsh-theme)

Additional setup:

- Install one of the [patched fonts from Vim-Powerline](https://github.com/powerline/fonts) or [patch your own](https://github.com/powerline/fontpatcher) for the special characters.
- *Optionally* set `DEFAULT_USER` to your regular username followed by prompt_context(){} in `~/.zshrc` to hide the “user@hostname” info when you’re logged in as yourself on your local machine.

### alanpeabody

![alanpeabody](https://user-images.githubusercontent.com/49100982/108254746-78154a80-716c-11eb-873a-6500b9d54219.jpg)

### amuse

![amuse](https://user-images.githubusercontent.com/49100982/108254748-78ade100-716c-11eb-8f61-0a2bec4f671c.jpg)

(You might need to install one of the [patched powerline fonts](https://github.com/powerline/fonts) for it to look the same)

### apple

![apple](https://user-images.githubusercontent.com/49100982/108254750-78ade100-716c-11eb-8c3b-7d529b7b4e25.jpg)

### arrow

![arrow](https://user-images.githubusercontent.com/49100982/108254751-78ade100-716c-11eb-9135-39cbffcf406e.jpg)

### aussiegeek

![aussiegeek](https://user-images.githubusercontent.com/49100982/108254752-79467780-716c-11eb-82d4-304d04bf35bf.jpg)

### avit

![avit](https://user-images.githubusercontent.com/49100982/108254755-79df0e00-716c-11eb-9069-da947bd4a3dc.jpg)

### awesomepanda

![awesomepanda](https://user-images.githubusercontent.com/49100982/108254758-79df0e00-716c-11eb-8990-62f456ddd785.jpg)

## B

### bira

![bira](https://user-images.githubusercontent.com/49100982/108254762-7a77a480-716c-11eb-8665-b4f459fd8920.jpg)

### blinks

![blinks](https://user-images.githubusercontent.com/49100982/108254767-7b103b00-716c-11eb-9bdd-426643a53722.jpg)

### bureau

![bureau](https://user-images.githubusercontent.com/49100982/108254768-7b103b00-716c-11eb-92e1-ebd7486d6f13.jpg)

To use: In the right prompt you see git status and (if you use nvm) the Node.js version.

## C

### candy

![candy](https://user-images.githubusercontent.com/49100982/108254770-7ba8d180-716c-11eb-965f-63b9ce0efe15.jpg)

### clean

![clean](https://user-images.githubusercontent.com/49100982/108254772-7ba8d180-716c-11eb-9d96-f54d13acde5b.jpg)

### cloud

![cloud](https://user-images.githubusercontent.com/49100982/108254774-7c416800-716c-11eb-9ea8-8f8cbac82922.jpg)

### crcandy

![crcandy](https://user-images.githubusercontent.com/49100982/108254775-7c416800-716c-11eb-8e54-fa40ccb0d519.jpg)

### crunch

![crunch](https://user-images.githubusercontent.com/49100982/108254776-7cd9fe80-716c-11eb-889a-84d7b26df847.jpg)

### cypher

![cypher](https://user-images.githubusercontent.com/49100982/108254777-7d729500-716c-11eb-9ab2-232ed00e30aa.jpg)

## D

### dallas

![dallas](https://user-images.githubusercontent.com/49100982/108254779-7d729500-716c-11eb-98b9-ef343be7a8fe.jpg)

### darkblood

![darkblood](https://user-images.githubusercontent.com/49100982/108254782-7e0b2b80-716c-11eb-95db-b149bc1c0032.jpg)

### daveverwer

![daveverwer](https://user-images.githubusercontent.com/1816101/62961143-7e4e9c00-bdfc-11e9-9777-ce1f230de9d7.jpg)

### dieter

![dieter](https://user-images.githubusercontent.com/49100982/108254786-7ea3c200-716c-11eb-9c33-d24d404d4e25.jpg)

### dogenpunk

![dogenpunk](https://user-images.githubusercontent.com/49100982/108254788-7f3c5880-716c-11eb-96e3-27cc0d6297d3.jpg)

### dpoggi

![dpoggi](https://user-images.githubusercontent.com/49100982/108254790-7fd4ef00-716c-11eb-821e-d11fba0c4f10.jpg)

### dst

![dst](https://user-images.githubusercontent.com/49100982/108254792-7fd4ef00-716c-11eb-8fa7-67d845b771be.jpg)

### dstufft

![dstufft](https://user-images.githubusercontent.com/49100982/108254797-806d8580-716c-11eb-9ec5-ae1b23d0a7cd.jpg)

### duellj

![duellj](https://user-images.githubusercontent.com/49100982/108254799-806d8580-716c-11eb-9f1e-2634dc9309d3.jpg)

## E

### eastwood

![eastwood](https://user-images.githubusercontent.com/49100982/108254800-81061c00-716c-11eb-858e-aa17d4c5e07e.jpg)

### edvardm

![edvardm](https://user-images.githubusercontent.com/49100982/108254801-819eb280-716c-11eb-9279-01b8ef95c734.jpg)

### emotty

![emotty](https://user-images.githubusercontent.com/49100982/108254802-819eb280-716c-11eb-9d66-d21bb1e7196c.jpg)

### essembeh

![essembeh](https://user-images.githubusercontent.com/49100982/108254803-82374900-716c-11eb-9510-ef560d31e7e7.jpg)

### evan

![evan](https://user-images.githubusercontent.com/49100982/108254804-82374900-716c-11eb-9636-71abb16053df.jpg)

## F

### fino-time

![fino-time](https://user-images.githubusercontent.com/49100982/108254806-82cfdf80-716c-11eb-9bbc-2d9648109b31.jpg)

### fino

![fino](https://user-images.githubusercontent.com/49100982/108254809-82cfdf80-716c-11eb-8d66-027fe4ecfd55.jpg)

### fishy

![fishy](https://user-images.githubusercontent.com/49100982/108254811-83687600-716c-11eb-88df-2d1fb721a62b.jpg)

The fish shell prompt with git support

### flazz

![flazz](https://user-images.githubusercontent.com/49100982/108254813-83687600-716c-11eb-98dc-083a14aae6e1.jpg)

Has git and vi-command mode support (when enabled)

### fletcherm

![fletcherm](https://user-images.githubusercontent.com/49100982/108254817-84010c80-716c-11eb-8d56-81bc95a46ef5.jpg)

### fox

![fox](https://user-images.githubusercontent.com/49100982/108254819-8499a300-716c-11eb-9c13-c6fd49d72a6c.jpg)

### frisk

![frisk](https://user-images.githubusercontent.com/49100982/108254820-8499a300-716c-11eb-922d-5cc6ffa08fc1.jpg)

### frontcube

![frontcube](https://user-images.githubusercontent.com/49100982/108254821-85323980-716c-11eb-90b9-fc0b4b014f36.jpg)

### funky

![funky](https://user-images.githubusercontent.com/49100982/108254822-85323980-716c-11eb-8422-69480dce0f62.jpg)

It’s funky…

### fwalch

![fwalch](https://user-images.githubusercontent.com/49100982/108254824-85cad000-716c-11eb-9b7a-fe9e24131df7.jpg)

# G

### gallifrey

![gallifrey](https://user-images.githubusercontent.com/49100982/108254827-86636680-716c-11eb-94e2-64318cb21f3b.jpg)

### gallois

![gallois](https://user-images.githubusercontent.com/49100982/108254828-86636680-716c-11eb-8d3a-146431df149f.jpg)

### garyblessington

![garyblessington](https://user-images.githubusercontent.com/49100982/108254830-86fbfd00-716c-11eb-8e9e-57cb190cd35b.jpg)

### gentoo

![gentoo](https://user-images.githubusercontent.com/49100982/108254832-86fbfd00-716c-11eb-8bbf-7840e84b4c44.jpg)

### geoffgarside

![geoffgarside](https://user-images.githubusercontent.com/49100982/108254834-87949380-716c-11eb-8ff7-9a494c650852.jpg)

### gianu

![gianu](https://user-images.githubusercontent.com/49100982/108254836-87949380-716c-11eb-8d5b-a4b24ea53f67.jpg)

### gnzh

![gnzh](https://user-images.githubusercontent.com/49100982/108254837-882d2a00-716c-11eb-9f49-3b5e6e62eb52.jpg)

### gozilla

![gozilla](https://user-images.githubusercontent.com/49100982/108254838-88c5c080-716c-11eb-9bd9-4d88b870f04f.jpg)

## H

### half-life

![half-life](https://user-images.githubusercontent.com/49100982/108254840-88c5c080-716c-11eb-9971-f2cfbf54f91a.jpg)

### humza

![humza](https://user-images.githubusercontent.com/49100982/108254841-895e5700-716c-11eb-9984-ab8ec70ad92e.jpg)

# I

### imajes

![imajes](https://user-images.githubusercontent.com/49100982/108254845-895e5700-716c-11eb-807f-0ecb0aa4db00.jpg)

### intheloop

![intheloop](https://user-images.githubusercontent.com/49100982/108254849-89f6ed80-716c-11eb-8e92-dcf5e576df64.jpg)

### itchy

![itchy](https://user-images.githubusercontent.com/49100982/108254851-89f6ed80-716c-11eb-9922-185b952b24db.jpg)

# J

### jaischeema

![jaischeema](https://user-images.githubusercontent.com/49100982/108254853-8a8f8400-716c-11eb-9775-780e00c3f680.jpg)

### jbergantine

![jbergantine](https://user-images.githubusercontent.com/49100982/108254855-8b281a80-716c-11eb-960d-2f2cf8e5153f.jpg)

### jispwoso

![jispwoso](https://user-images.githubusercontent.com/49100982/108254857-8bc0b100-716c-11eb-808f-d0b6f1a16774.jpg)

### jnrowe

![jnrowe](https://user-images.githubusercontent.com/49100982/108254859-8bc0b100-716c-11eb-998b-4ee8bb6c1f3f.jpg)

### jonathan

![jonathan](https://user-images.githubusercontent.com/49100982/108254860-8c594780-716c-11eb-8f8b-be04d4943216.jpg)

### josh

![josh](https://user-images.githubusercontent.com/49100982/108254862-8cf1de00-716c-11eb-8bfe-f2e46376a10f.jpg)

### jreese

![jreese](https://user-images.githubusercontent.com/49100982/108254863-8cf1de00-716c-11eb-935f-87cc85ef6ed7.jpg)

### jtriley

![jtriley](https://user-images.githubusercontent.com/49100982/108254869-8d8a7480-716c-11eb-8857-ee82b1fe4023.jpg)

### juanghurtado

![juanghurtado](https://user-images.githubusercontent.com/49100982/108254872-8d8a7480-716c-11eb-9782-4a37a851ce1f.jpg)

### junkfood

![junkfood](https://user-images.githubusercontent.com/49100982/108254874-8e230b00-716c-11eb-90ea-e4f66c9a3dd6.jpg)

> Totally ripped off Dallas theme

[More Info](https://www.tylercipriani.com/2012/12/18/zsh-prompt-customization.html)

## K

### kafeitu

![kafeitu](https://user-images.githubusercontent.com/49100982/108254876-8e230b00-716c-11eb-9adb-50d695796563.jpg)

### kardan

![kardan](https://user-images.githubusercontent.com/49100982/108254877-8ebba180-716c-11eb-9fb5-9b0437433305.jpg)

### kennethreitz

![kennethreitz](https://user-images.githubusercontent.com/49100982/108254878-8f543800-716c-11eb-9373-a3e4e19b58ae.jpg)

### kolo

![kolo](https://user-images.githubusercontent.com/49100982/108254881-8f543800-716c-11eb-8115-2232727264d6.jpg)

### kphoen

![kphoen](https://user-images.githubusercontent.com/49100982/108254883-8fecce80-716c-11eb-9a4d-ad5c465af835.jpg)

# L

### lambda

![lambda](https://user-images.githubusercontent.com/49100982/108254885-8fecce80-716c-11eb-8012-aabac630c475.jpg)

### linuxonly

![linuxonly](https://user-images.githubusercontent.com/49100982/108254886-90856500-716c-11eb-81e8-8ba2b7ea922f.jpg)

(As the name states, this only works on Linux)

### lukerandall

![lukerandall](https://user-images.githubusercontent.com/49100982/108254887-911dfb80-716c-11eb-99a0-275b35afd9ce.jpg)

## M

### macovsky

![macovsky](https://user-images.githubusercontent.com/49100982/108254888-911dfb80-716c-11eb-9595-b08415fb1c17.jpg)

### maran

![maran](https://user-images.githubusercontent.com/49100982/108254890-91b69200-716c-11eb-8fa3-108c8692087c.jpg)

### mgutz

![mgutz](https://user-images.githubusercontent.com/49100982/108254893-91b69200-716c-11eb-9f6c-221967f1adc6.jpg)

### mh

![mh](https://user-images.githubusercontent.com/49100982/108254896-924f2880-716c-11eb-83fe-be8f732f46da.jpg)

### michelebologna

![michelebologna](https://user-images.githubusercontent.com/49100982/108254897-92e7bf00-716c-11eb-86b8-bf00a43d6a43.jpg)

### mikeh

![mikeh](https://user-images.githubusercontent.com/49100982/108254900-93805580-716c-11eb-9e39-5e8dda6c2308.jpg)

### miloshadzic

![miloshadzic](https://user-images.githubusercontent.com/49100982/108254899-93805580-716c-11eb-84d6-822e33ad5ffb.jpg)

### minimal

![minimal](https://user-images.githubusercontent.com/49100982/108254900-93805580-716c-11eb-9e39-5e8dda6c2308.jpg)

### mortalscumbag

![mortalscumbag](https://user-images.githubusercontent.com/49100982/108254901-9418ec00-716c-11eb-9439-6dd4621e6784.jpg)

Also tells you when logged in over ssh

### mrtazz

![mrtazz](https://user-images.githubusercontent.com/49100982/108254902-9418ec00-716c-11eb-9001-6a5abecf0aa1.jpg)

### murilasso

![murilasso](https://user-images.githubusercontent.com/1816101/62966002-6419bb80-be06-11e9-90f0-7ef55042e6e9.jpg)

### muse

![muse](https://user-images.githubusercontent.com/49100982/108254905-954a1900-716c-11eb-820c-15814dd13a7d.jpg)

## N

### nanotech

![nanotech](https://user-images.githubusercontent.com/49100982/108254907-954a1900-716c-11eb-8be4-d8accb5a2a44.jpg)

### nebirhos

![nebirhos](https://user-images.githubusercontent.com/49100982/108254909-95e2af80-716c-11eb-8d16-d78875d9263a.jpg)

### nicoulaj

![nicoulaj](https://user-images.githubusercontent.com/49100982/108254911-95e2af80-716c-11eb-811d-e8ea16f6ee0c.jpg)

### norm

![norm](https://user-images.githubusercontent.com/49100982/108254912-967b4600-716c-11eb-8e3e-eb5487570074.jpg)

## O

### obraun

![obraun](https://user-images.githubusercontent.com/49100982/108254914-967b4600-716c-11eb-8c11-830bc97f274e.jpg)

## P

### peepcode

![peepcode](https://user-images.githubusercontent.com/49100982/108254917-9713dc80-716c-11eb-8f73-69c67ced32a7.jpg)

### philips

![philips](https://user-images.githubusercontent.com/49100982/108254919-97ac7300-716c-11eb-9338-cb7009d3a5ea.jpg)

### pmcgee

![pmcgee](https://user-images.githubusercontent.com/49100982/108254920-97ac7300-716c-11eb-80d5-301ba10cf969.jpg)

### pygmalion

![pygmalion](https://user-images.githubusercontent.com/49100982/108254921-98450980-716c-11eb-9d27-18562610887f.jpg)

## R

### re5et

![re5et](https://user-images.githubusercontent.com/49100982/108254922-98450980-716c-11eb-88af-2e1c1ba5c5fe.jpg)

### refined

![refined](https://user-images.githubusercontent.com/49100982/108255729-b2cbb280-716d-11eb-8869-d612e2344ef5.jpg)

### rgm

![rgm](https://user-images.githubusercontent.com/49100982/108255732-b2cbb280-716d-11eb-8587-f8b412c48907.jpg)

### risto

![risto](https://user-images.githubusercontent.com/49100982/108255733-b3644900-716d-11eb-8fea-4ce136198782.jpg)

### rixius

![rixius](https://user-images.githubusercontent.com/49100982/108255734-b3fcdf80-716d-11eb-8e9b-b8c7c7546e75.jpg)

### rkj-repos

![rkj](https://user-images.githubusercontent.com/49100982/108255735-b3fcdf80-716d-11eb-92ee-678fd1bff92f.jpg)

## S

### sammy

![sammy](https://user-images.githubusercontent.com/49100982/108255736-b4957600-716d-11eb-848a-f4b9a83a58c7.jpg)

### simonoff

![simonoff](https://user-images.githubusercontent.com/49100982/108255738-b4957600-716d-11eb-8dea-87c1764d7e35.jpg)

### simple

![simple](https://user-images.githubusercontent.com/49100982/108255740-b52e0c80-716d-11eb-8645-d1ed285204f9.jpg)

### skaro

![skaro](https://user-images.githubusercontent.com/49100982/108255742-b52e0c80-716d-11eb-8ea1-8a6aa361fe96.jpg)

### smt

![smt](https://user-images.githubusercontent.com/49100982/108255743-b5c6a300-716d-11eb-9f64-185f288c1364.jpg)

### Soliah

![Soliah](https://user-images.githubusercontent.com/49100982/108255747-b65f3980-716d-11eb-8e12-1ce6cf4d009f.jpg)

### sonicradish

![sonicradish](https://user-images.githubusercontent.com/49100982/108255750-b65f3980-716d-11eb-9dfc-620748a03844.jpg)

### sorin

![sorin](https://user-images.githubusercontent.com/49100982/108255752-b6f7d000-716d-11eb-8415-3d5d18839646.jpg)

### sporty_256

![sporty_256](https://user-images.githubusercontent.com/49100982/108255753-b6f7d000-716d-11eb-96b7-7448b890a583.jpg)

### steeef

![steeef](https://user-images.githubusercontent.com/49100982/108255754-b7906680-716d-11eb-9e70-4d79fdd62a2a.jpg)

### strug

![strug](https://user-images.githubusercontent.com/49100982/108255755-b828fd00-716d-11eb-8dee-2d981777a2b3.jpg)

### sunaku

![sunaku](https://user-images.githubusercontent.com/49100982/108255759-b828fd00-716d-11eb-8951-0af2c0ac1297.jpg)

Exit status if nonzero, status & branch if git, `pwd` always.

### sunrise

![sunrise](https://user-images.githubusercontent.com/49100982/108255761-b8c19380-716d-11eb-8c73-02da22b53021.jpg)

Lightweight prompt with exit status and `git status` consistent mode line.

### superjarin

![superjarin](https://user-images.githubusercontent.com/49100982/108255762-b8c19380-716d-11eb-8ab2-de382c6dd78e.jpg)

Git status, git branch, and ruby, all in a no muss, no fuss prompt! Works with RVM, chruby, and rbenv (just activate the corresponding plugin).

### suvash

![suvash](https://user-images.githubusercontent.com/49100982/108255766-b95a2a00-716d-11eb-905e-bad027eacc41.jpg)

Username, host, directory, git branch and rvm gemset

## T

### takashiyoshida

![takashiyoshida](https://user-images.githubusercontent.com/49100982/108255767-b95a2a00-716d-11eb-9750-41c3b6036529.jpg)

### terminalparty

![terminalparty](https://user-images.githubusercontent.com/49100982/108255770-b9f2c080-716d-11eb-8e79-068a5ed7ee7a.jpg)

There is a party every day.

### theunraveler

![theunraveler](https://user-images.githubusercontent.com/49100982/108255772-ba8b5700-716d-11eb-99cc-53d05b5bf20c.jpg)

Minimal, informative when it needs to be.

### tjkirch

![tjkirch](https://user-images.githubusercontent.com/49100982/108255774-ba8b5700-716d-11eb-80f2-213a9932fb0a.jpg)

Based on dst, plus a lightning bolt and return codes.

### tonotdo

![tonotdo](https://user-images.githubusercontent.com/49100982/108255775-bb23ed80-716d-11eb-9ec4-ea00690300bb.jpg)

### trapd00r

![trapd00r](https://user-images.githubusercontent.com/49100982/108255776-bb23ed80-716d-11eb-9ada-24b61a3d4afe.jpg)

## W

### wedisagree

![wedisagree](https://user-images.githubusercontent.com/49100982/108255779-bbbc8400-716d-11eb-98e9-3d0993efe2c3.jpg)

Instructions to further customize the theme are available as comments in the theme file.

### wezm

![wezm](https://user-images.githubusercontent.com/49100982/108255780-bbbc8400-716d-11eb-83b2-b9a4ba63bdbf.jpg)

### wezm+

![wezm+](https://user-images.githubusercontent.com/49100982/108255782-bc551a80-716d-11eb-9347-c841028b8c1a.jpg)

### wuffers

![wuffers](https://user-images.githubusercontent.com/49100982/108255783-bcedb100-716d-11eb-9330-e1d16aeaf994.jpg)

## X

### xiong-chiamiov

![xiong-chiamiov-plus](https://user-images.githubusercontent.com/49100982/108255788-bd864780-716d-11eb-87b1-01cab8ee3f93.jpg)

### xiong-chiamiov-plus

![xiong-chiamiov](https://user-images.githubusercontent.com/49100982/108255786-bcedb100-716d-11eb-9f4d-540b75cc62c2.jpg)

## Y

### ys

![ys](https://user-images.githubusercontent.com/49100982/108255792-be1ede00-716d-11eb-8c26-f7ad7ab3c4f2.jpg)

Clean, simple, compatible and meaningful.Tested on Linux, Unix and Windows under ANSI colors.
It is recommended to use with a dark background.

[More info](https://blog.ysmood.org/my-ys-terminal-theme/)

## Z

### zhann

![zhann](https://user-images.githubusercontent.com/49100982/108255796-be1ede00-716d-11eb-8b61-9a419ebe7a4a.jpg)

----

## More themes

You can find more themes [here](https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes).

</details>




![Agnoster theme](https://cloud.githubusercontent.com/assets/2618447/6316862/70f58fb6-ba03-11e4-82c9-c083bf9a6574.png)






#### Selecting a Theme

Once you find a theme that you'd like to use go to the configurations tab, go to the **Theme** configuration, and select the theme you'd like.

The default theme is _robbyrussell_. It's not the fanciest one. It's not the simplest one. It's just the right one (for him).


#### Randomly select a Theme
If you're feeling feisty, you can let the computer select one randomly for you each time you open a new terminal window.

1. Set the **Theme** configuration to random
2. [Optional] If you want random to only select from a list of your favorite themes, choose those themes in your **Random Theme Candidates** configuration variable
3. [Optional] If you want random to ignore from a list of themes, choose those themes in your **Ignored Random Theme Candidates** configuration variable


#### Extra notes

1. Several themes require installing the [Powerline Fonts](https://github.com/powerline/fonts) in order to render properly._
2. In case you did not find a suitable theme for your needs, please have a look at the wiki for [more of them](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes).


### FAQ

If you have some more questions or issues, you might find a solution in our [FAQ](https://github.com/ohmyzsh/ohmyzsh/wiki/FAQ).







## Advanced Topics

If you're the type that likes to get their hands dirty, these sections might resonate.

### Advanced Installation

Some users may want to manually install Oh My Zsh, or change the default path or other settings that
the installer accepts (these settings are also documented at the top of the install script).

#### Custom Directory

The default location is `~/.oh-my-zsh` (hidden in your home directory, you can access it with `cd ~/.oh-my-zsh`)

If you'd like to change the install directory with the `ZSH` environment variable, either by running
`export ZSH=/your/path` before installing, or by setting it before the end of the install pipeline
like this:

```sh
ZSH="$HOME/.dotfiles/oh-my-zsh" sh install.sh
```










### Custom Plugins and Themes

If you want to override any of the default behaviors, just add a new file (ending in `.zsh`) in the `custom/` directory.

If you have many functions that go well together, you can put them as a `XYZ.plugin.zsh` file in the `custom/plugins/` directory and then enable this plugin.

If you would like to override the functionality of a plugin distributed with Oh My Zsh, create a plugin of the same name in the `custom/plugins/` directory and it will be loaded instead of the one in `plugins/`.

## Getting Updates

By default, you will be prompted to check for updates every 2 weeks. You can choose other update modes by adding a line to your `~/.zshrc` file, **before Oh My Zsh is loaded**:

1. Automatic update without confirmation prompt:

   ```sh
   zstyle ':omz:update' mode auto
   ```

2. Just offer a reminder every few days, if there are updates available:

   ```sh
   zstyle ':omz:update' mode reminder
   ```

3. To disable automatic updates entirely:

   ```sh
   zstyle ':omz:update' mode disabled
   ```

NOTE: you can control how often Oh My Zsh checks for updates with the following setting:

```sh
# This will check for updates every 7 days
zstyle ':omz:update' frequency 7
# This will check for updates every time you open the terminal (not recommended)
zstyle ':omz:update' frequency 0
```

### Manual Updates

If you'd like to update at any point in time (maybe someone just released a new plugin and you don't want to wait a week?) you just need to run:

```sh
omz update
```

Magic! 🎉



## How do I contribute to Oh My Zsh?

Before you participate in our delightful community, please read the [code of conduct](CODE_OF_CONDUCT.md).

I'm far from being a [Zsh](https://www.zsh.org/) expert and suspect there are many ways to improve – if you have ideas on how to make the configuration easier to maintain (and faster), don't hesitate to fork and send pull requests!

We also need people to test out pull-requests. So take a look through [the open issues](https://github.com/ohmyzsh/ohmyzsh/issues) and help where you can.

See [Contributing](CONTRIBUTING.md) for more details.

### Do NOT send us themes

We have (more than) enough themes for the time being. Please add your theme to the [external themes](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes) wiki page.

## Contributors

Oh My Zsh has a vibrant community of happy users and delightful contributors. Without all the time and help from our contributors, it wouldn't be so awesome.

Thank you so much!

## Follow Us

We're on social media:

- [@ohmyzsh](https://twitter.com/ohmyzsh) on Twitter. You should follow it.
- [Facebook](https://www.facebook.com/Oh-My-Zsh-296616263819290/) poke us.
- [Instagram](https://www.instagram.com/_ohmyzsh/) tag us in your post showing Oh My Zsh!
- [Discord](https://discord.gg/ohmyzsh) to chat with us!

## Merchandise

We have [stickers, shirts, and coffee mugs available](https://shop.planetargon.com/collections/oh-my-zsh?utm_source=github) for you to show off your love of Oh My Zsh. Again, you will become the talk of the town!

## License

Oh My Zsh is released under the [MIT license](LICENSE.txt).

## About Planet Argon

![Planet Argon](https://pa-github-assets.s3.amazonaws.com/PARGON_logo_digital_COL-small.jpg)

Oh My Zsh was started by the team at [Planet Argon](https://www.planetargon.com/?utm_source=github), a [Ruby on Rails development agency](https://www.planetargon.com/skills/ruby-on-rails-development?utm_source=github). Check out our [other open source projects](https://www.planetargon.com/open-source?utm_source=github).
