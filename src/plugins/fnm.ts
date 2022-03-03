const plugin: Fig.Plugin = {
  name: "fnm",
  type: "shell",
  description: "Plugin for ZSH to install the Fast Node Manager (fnm).",
  github: "dominik-schwabe/zsh-fnm",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
