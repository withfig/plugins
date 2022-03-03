const plugin: Fig.Plugin = {
  name: "schroot",
  type: "shell",
  description: "null",
  github: "fshp/schroot.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
