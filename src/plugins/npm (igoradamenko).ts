const plugin: Fig.Plugin = {
  name: "npm (igoradamenko)",
  type: "shell",
  description: "npm aliases & command completion",
  github: "igoradamenko/npm.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "npm",
    "oh-my-zsh",
    "aliases",
    "zsh-plugin",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
