const plugin: Fig.Plugin = {
  name: "dogesh",
  type: "shell",
  description: "Doge-themed plugin for oh-my-zsh",
  github: "keithhamilton/oh-my-dogesh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
