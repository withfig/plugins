const plugin: Fig.Plugin = {
  name: "stashy",
  type: "shell",
  description: "git stash plugin for oh-my-zsh",
  github: "MisterRios/stashy",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
