const plugin: Fig.Plugin = {
  name: "plugin-ibtool",
  type: "shell",
  description: "ibtool shortcuts to generate localized XIB files",
  github: "rgalite/zsh-plugin-ibtool",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
