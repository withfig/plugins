const plugin: Fig.Plugin = {
  name: "percol",
  type: "shell",
  description: "Allows interactively incrementally search history/checkout git branches and other stuff",
  github: "robturtle/percol.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
