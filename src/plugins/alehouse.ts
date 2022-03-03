const plugin: Fig.Plugin = {
  name: "alehouse",
  type: "shell",
  description: "zsh-plugin for my brew aliases",
  github: "sticklerm3/alehouse",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
