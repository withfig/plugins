const plugin: Fig.Plugin = {
  name: "git-fuzzy",
  type: "shell",
  description: "interactive `git` with the help of `fzf`",
  github: "bigH/git-fuzzy",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
