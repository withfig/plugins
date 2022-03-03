const plugin: Fig.Plugin = {
  name: "efibootmgr",
  type: "shell",
  description: "Zsh completion for efibootmgr",
  github: "wehlando/efibootmgr-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
