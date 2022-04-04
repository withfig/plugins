const plugin: Fig.Plugin = {
  name: "lime_yous",
  type: "shell",
  description: "Simple standalone Zsh theme",
  authors: [
    {
      name: "yous",
      github: "yous",
    },
  ],
  github: "yous/lime",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "config"],
  installation: {
    origin: "github",
    sourceFiles: ["lime.plugin.zsh"],
  },
};

export default plugin;
