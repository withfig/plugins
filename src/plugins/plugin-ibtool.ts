const plugin: Fig.Plugin = {
  name: "plugin-ibtool",
  type: "shell",
  description: "ibtool shortcuts to generate localized XIB files",
  github: "rgalite/zsh-plugin-ibtool",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
