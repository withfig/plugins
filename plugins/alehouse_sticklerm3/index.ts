const plugin: Fig.Plugin = {
  icon: "💥",
  name: "alehouse_sticklerm3",
  type: "shell",
  description: "zsh-plugin for my brew aliases",
  authors: [
    {
      name: "sticklerm3",
      github: "sticklerm3",
    },
  ],
  github: "sticklerm3/alehouse",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["alehouse.plugin.zsh"],
  },
};

export default plugin;
