const plugin: Fig.Plugin = {
  name: "git-fuzzy",
  type: "shell",
  description: "interactive `git` with the help of `fzf`",
  github: "bigH/git-fuzzy",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
