const plugin: Fig.Plugin = {
  name: "extract (thetic)",
  type: "shell",
  description: "fork of the oh-my-zsh extract plugin",
  github: "thetic/extract",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
