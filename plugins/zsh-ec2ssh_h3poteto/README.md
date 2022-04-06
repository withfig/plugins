# zsh-ec2ssh

`zsh-ec2ssh` lists up EC2 instances on your AWS account, and you can choose an instance graphically. Then `zsh-ec2ssh` issues a ssh command to login that instance.

You often login EC2 instances if you are using AWS. Sometimes, you automate server generation, for example using autoscaling group; therefore, IP Addresses are not fixed.
In that case, you need to look up the IP Addresses before ssh login. `zsh-ec2ssh` can make that work easier.

## Demo

![demo](zsh-ec2ssh.gif)

I used shortcut key in the first half of this demo. And next, I wrote `zsh-ec2ssh` command to call the function.

## Install
### zplug

After you setup [zplug](https://github.com/zplug/zplug), write this line in your `~/.zshrc`:

```bash
zplug "h3poteto/zsh-ec2ssh"
```

and, install.

```bash
$ zplug install
```


### Manually

Cloning from GitHub, and source in your `~/.zshrc`:

```bash
$ git clone https://github.com/h3poteto/zsh-ec2ssh.git
```

## Requirements

- [peco](https://github.com/peco/peco)
- [myaws](https://github.com/minamijoyo/myaws)

After you install myaws, please set your AWS credentials in `~/.aws/credentials`:

```
[default]
aws_access_key_id = XXXXXX
aws_secret_access_key = XXXXXX
```

## Usage
### Login an instance

Please write shortcut setting in your `~/.zshrc`:

```bash
AWS_PROFILE_NAME=default
AWS_DEFAULT_REGION=ap-northeast-1
SSH_USER=h3poteto
SSH_PRIVATE_KEY_PATH=$HOME/.ssh/id_rsa
SSH_PORT=22

function zsh-ec2ssh-default() { zsh-ec2ssh $AWS_PROFILE_NAME $AWS_DEFAULT_REGION $SSH_USER $SSH_PRIVATE_KEY_PATH $SSH_PORT }
zle -N zsh-ec2ssh-default
bindkey '^t' zsh-ec2ssh-default # Ctrl + t
```

### Using proxy server

If you prepared proxy server in AWS to login the instance, you can use `zsh-ec2ssh-with-proxy`. At the first, this function lists up EC2 instances to choose the proxy server. Next, this function lists up instances once again to choose the login target server.

Please write shortcut setting in your `~/.zshrc`:

```bash
AWS_PROFILE_NAME=production
AWS_DEFAULT_REGION=ap-northeast-1
SSH_USER=h3poteto
SSH_PRIVATE_KEY_PATH=/var/opt/keys/.ssh/private.pem
SSH_PORT=22
AWS_PROXY_PROFILE=proxy
SSH_PROXY_USER=proxy-login-user
SSH_PROXY_PRIVATE_KEY_PATH=$HOME/.ssh/id_rsa
SSH_PROXY_PORT=22

function zsh-ec2ssh-production-proxy() { zsh-ec2ssh-with-proxy $AWS_PROFILE_NAME $AWS_DEFAULT_REGION $SSH_USER $SSH_PRIVATE_KEY_PATH $SSH_PORT $AWS_PROXY_PROFILE $SSH_PROXY_USER $SSH_PROXY_PRIVATE_KEY_PATH $SSH_PROXY_PORT }
zle -N zsh-ec2ssh-production-proxy
bindkey '^p' zsh-ec2ssh-production-proxy # Ctrl + p
```

Your machine --(ssh using `SSH_PROXY_USER`, `SSH_PROXY_PRIVATE_KEY_PATH` and `SSH_PROXY_PORT`)--> proxy server --(ssh using `SSH_USER`, `SSH_PRIVATE_KEY_PATH` and `SSH_PORT`)--> target server

## Arguments
### zsh-ec2ssh

|Argument|Description|Default|
|:---|:---|:---|
|AWS_PROFILE_NAME|AWS profile name which instances are located.|`AWS_DEFAULT_PROFILE` environment variables|
|AWS_DEFAULT_REGION|AWS region name which instances are located.|`AWS_DEFAULT_REGION` environment variables|
|SSH_USER|User name to login the server.|`USER` environment variables|
|SSH_PRIVATE_KEY_PATH|Private key path of ssh.|`$HOME/.ssh/id_rsa`|
|SSH_PORT|Port to use ssh.|22|

### zsh-ec2ssh-with-proxy

|Argument|Description|Default|
|:---|:---|:---|
|AWS_PROFILE_NAME|AWS profile name which target instances are located.|`AWS_DEFAULT_PROFILE` environment variables|
|AWS_DEFAULT_REGION|AWS region name which target instances are located.|`AWS_DEFAULT_REGION` environment variables|
|SSH_USER|User name to login target server.|`USER` environment variables|
|SSH_PRIVATE_KEY_PATH|Private key path which is used login to target server.|`$HOME/.ssh/id_rsa`|
|SSH_PORT|Port which is used login to target server.|22|
|AWS_PROXY_PROFILE|AWS profile name which proxy server are located.|`AWS_DEFAULT_PROFILE` environment variables|
|SSH_PROXY_USER|User name to login proxy server.|`USER` environment variables|
|SSH_PROXY_PRIVATE_KEY_PATH|Private key path to login proxy server.|`$HOME/.ssh/id_rsa`|
|SSH_PROXY_PORT|Port which is used ssh login to proxy server.|22|

## License

The application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

