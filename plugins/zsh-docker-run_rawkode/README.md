# zsh-docker-run

## Run commands naturally, forgetting all about Docker

Run commands "naturally" without having them installed, using Docker.

### Why?

As we adopt Docker more, we install a whole lot less on our machines. Instead of installing node, php, ruby - we pull their latest Docker images. This means that simple commands, such as `npm install` and `irb` become more cumbersome, such as:

```shell
docker run --rm -it --entrypoint=irb ruby:latest
```

It'd be much better if we could work as we used to, keeping our simple commands. Your first thought might be "use an alias" ... but we want to be better than that. What if we're inside of a project that's using `docker-compose` and we want to update our node packages?

Normally, this is just `npm update`; but instead, we now need to use `docker-compose run --rm node npm update`

*Using this plugin, we can detect these situations for you*. Go back to using `npm update`. Just add a simple function and call `run_with_docker` :smile:

### How?

Install this plugin with your favourite zsh plugin manager, I use `zplug`:

```shell
# For zplug
zplug "rawkode/zsh-docker-run"
```

Now all you need to-do is add some functions to your `.zshrc` file:

```shell
function example {
  run_with_docker "image_name" "image_tag" "command" $@
}

function npm {
  run_with_docker "node" "alpine" "npm" $@
}
```

### More Examples

```shell
function elixir() {
  run_with_docker "elixir" "latest" "elixir" $@
}

function iex() {
  run_with_docker "elixir" "latest" "iex" $@
}

function mix() {
  run_with_docker "elixir" "latest" "mix" $@
}

function go() {
  run_with_docker "golang" "latest" "go" $@
}

function php() {
  run_with_docker "php" "latest" "php" $@
}
```

### What's Next?

- [ ] I'd like to provide a simpler interface, replacing functions with a map?
- [ ] Possibly provide a bunch of defaults, enabling the more popular commands


