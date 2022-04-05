# Zsh plugin for Elixir, IEx, Mix, Kiex and Phoenix

Terminal shortcuts for Elixir developers.

## Install and run

These [shortcuts](https://github.com/gusaiani/elixir-oh-my-zsh/blob/master/elixir.plugin.zsh) have nothing exclusive to Zsh, they are basic shell commands. This means you can always copy the contents and use them with just about any shell setup.

However, if you already use one of the libraries listed below, here's to any easy life:

### [Antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle gusaiani/elixir-oh-my-zsh` to your `.zshrc` file. Antigen will handle cloning the plugin for you automatically the next time you start `zsh`. You can also add the plugin to a running ZSH with `antigen bundle gusaiani/elixir-oh-my-zsh` for testing before adding it to your `.zshrc`.

### [Oh-My-Zsh](http://ohmyz.sh/)

```
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/gusaiani/elixir-oh-my-zsh.git elixir
```

Enable it by adding _elixir_ to the [_plugins array_](https://github.com/robbyrussell/oh-my-zsh/blob/master/templates/zshrc.zsh-template#L66).
You have to restart your current terminal in order to use the aliases below.
```
# located under $HOME/.zshrc
plugins=(git elixir)
```

### [Zgen](https://github.com/tarjoilija/zgen)

Add `zgen load gusaiani/elixir-oh-my-zsh` to your `.zshrc` file in the same function you're doing your other `zgen load` calls in. Zgen will automatically clone the repository for you when you do a `zgen save`, and load it the next time you start a terminal session.

## Functions

| Function                 | Command
| :------------------------| :--------------------------------
| mncd app-name            | mix new app-name; cd app-name

## Aliases

| Alias                    | Command
| :------------------------| :--------------------------------
| i                        | iex
| ips                      | iex -S mix phx.server
| ism                      | iex -S mix
| m                        | mix
| mab                      | mix archive.build
| mai                      | mix archive.install
| mat                      | mix app.tree
| mc                       | mix compile
| mcf                      | mix compile --force
| mcv                      | mix compile --verbose
| mcl                      | mix clean
| mca                      | mix do clean, deps.clean --all
| mco                      | mix coveralls
| mcoh                     | mix coveralls.html
| mdoc                     | mix docs
| mdl                      | mix dialyzer
| mdlp                     | mix dialyzer --plt
| mcr                      | mix credo
| mcrs                     | mix credo --strict
| mcx                      | mix compile.xref
| mdc                      | mix deps.compile
| mdg                      | mix deps.get
| mdgc                     | mix do deps.get, deps.compile
| mdt                      | mix deps.tree
| mdu                      | mix deps.update
| mdua                     | mix deps.update --all
| mdun                     | mix deps.unlock
| mduu                     | mix deps.unlock --unused
| meb                      | mix escript.build
| mec                      | mix ecto.create
| mecm                     | mix do ecto.create, ecto.migrate
| med                      | mix ecto.drop
| mem                      | mix ecto.migrate
| megm                     | mix ecto.gen.migration
| merb                     | mix ecto.rollback
| mers                     | mix ecto.reset
| mes                      | mix ecto.setup
| mf                       | mix format
| mge                      | mix gettext.extract
| mgem                     | mix gettext.extract --merge
| mgm                      | mix gettext.merge priv/gettext
| mho                      | mix hex.outdated
| mlh                      | mix local.hex
| mn                       | mix new
| mns                      | mix new --sup
| mpd                      | mix phx.digest
| mpgc                     | mix phx.gen.channel
| mpgco                    | mix phx.gen.context
| mpgh                     | mix phx.gen.html
| mpgj                     | mix phx.gen.json
| mpgl                     | mix phx.gen.live
| mpgm                     | mix phx.gen.model
| mpgs                     | mix phx.gen.secret
| mpn                      | mix phx.new
| mpr                      | mix phx.routes
| mps                      | mix phx.server
| mr                       | mix run
| mrnh                     | mix run --no-halt
| mrl                      | mix release
| msn                      | mix scenic.new
| msne                     | mix scenic.new.example
| msnn                     | mix scenic.new.nerves
| msr                      | mix scenic.run
| mt                       | mix test
| mtc                      | mix test --cover
| mtf                      | mix test --failed
| mtmf                     | mix test --max-failures
| mts                      | mix test --stale
| mtw                      | mix test.watch (See https://github.com/lpil/mix-test.watch)
| mx                       | mix xref
| hri                      | heroku run "POOL_SIZE=2 iex -S mix"
| hrip                     | heroku run "POOL_SIZE=2 iex -S mix" -r production
| hris                     | heroku run "POOL_SIZE=2 iex -S mix" -r staging
| hrmem                    | heroku run "POOL_SIZE=2 mix ecto.migrate"
| hrmes                    | heroku run "POOL_SIZE=2 mix run priv/repo/seeds.exs"
| kd                       | kiex default
| ki                       | kiex install
| kl                       | kiex list
| klb                      | kiex list branches
| klk                      | kiex list known
| klr                      | kiex list releases
| ks                       | kiex shell
| ksu                      | kiex selfupdate
| ku                       | kiex use

