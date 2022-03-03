const plugin: Fig.Plugin = {
  name: "vterm",
  type: "shell",
  description: "zsh init code for vterm, suitable for use as an omz plugin",
  github: "randomphrase/vterm-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
