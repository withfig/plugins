# zsh-undollar

**zsh-undollar** strips the dollar sign from the beginning of the terminal command you just copied from StackOverflow when you were searching for what arguments to pass to tar (xzf? xvfJ? Or was it xvf? You never seem to remember).

## Usage

After you've installed zsh-undollar, you can forget it exists. Next time you paste in a command prefixed with a dollar sign, undollar will quietly eat the dollar sign and run the rest of the command.

```bash
neo@computey:~$ $ tar xvfJ something.tar.xz
neo@computey:~$
neo@computey:~$ echo "It worked! Thanks undollar!"
```

It's as if that stray dollar sign was never there in the first place!

## Wait what

People often put a "$" in front of a command to indicate that it must be executed on the command line. This is because, on Unix-like operating systems, the command-prompt usually ends in a "$" for non-root users -- so the last thing before a command is a "$".

Often when copy-pasting terminal commands from the internet you'll inadvertently end up also having copied the dollar sign at the beginning (especially if you triple-click to select). Trying to execute the command you just pasted will result in some variant of "command not found" or "No such file or directory".

Installing zsh-undollar solves this problem, by registering $ as a valid alias, which simply runs everything after that $.

## Instalation

### Using [zpm](https://github.com/zpm-zsh/zpm)

Add `zpm load zpm-zsh/undollar` into `.zshrc`

### Using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Execute `git clone https://github.com/zpm-zsh/undollar ~/.oh-my-zsh/custom/plugins/undollar`. Add `undollar` into plugins array in `.zshrc`

### Using [antigen](https://github.com/zsh-users/antigen)

Add `antigen bundle zpm-zsh/undollar` into `.zshrc`

### Using [zgen](https://github.com/tarjoilija/zgen)

Add `zgen load zpm-zsh/undollar` into `.zshrc`

### Thanks to [undollar](https://github.com/ImFeelingDucky/undollar) for the idea of plugin and README.

