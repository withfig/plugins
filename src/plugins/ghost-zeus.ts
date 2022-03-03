const plugin: Fig.Plugin = {
  name: "ghost-zeus",
  type: "shell",
  description: "zsh plugin that lets you use zeus with normal rails commands",
  github: "fontno/ghost_zeus",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
