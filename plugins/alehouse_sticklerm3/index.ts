const plugin: Fig.Plugin = {
  name: "alehouse_sticklerm3",
  displayName: "Alehouse",
  description: "zsh-plugin for my brew aliases",
  icon: "🍺",
  type: "shell",
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
