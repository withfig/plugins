const plugin: Fig.Plugin = {
  name: "mac-packaging",
  type: "shell",
  description: "ZSH plugin for common Mac Packaging functions",
  github: "Temikus/mac-packaging",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
