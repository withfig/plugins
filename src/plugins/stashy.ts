const plugin: Fig.Plugin = {
  name: "stashy",
  type: "shell",
  description: "git stash plugin for oh-my-zsh",
  github: "MisterRios/stashy",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
