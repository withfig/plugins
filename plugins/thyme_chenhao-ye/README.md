# Thyme

Thyme is a shell theme based on [Starship](https://starship.rs). Compared to an oh-my-zsh-based theme, a starship-based theme is faster and more portable. Technically, thyme could also be used in most modern shells, with the best compatibility if the shell support the right prompt (e.g. zsh, fish, elvish).

![thyme-screenshot](img/thyme-v2-screenshot.png)

Thyme's prompt shows:

- current time and execution time of the last command
- return value of the last command and its meaning (e.g. killed by which signal) if not zero
- job control status if there is at least one job
- git info (current branch name, dirty or not, status, etc.) if in a git repository

To install for zsh:

```shell
zsh ./install.sh
```

