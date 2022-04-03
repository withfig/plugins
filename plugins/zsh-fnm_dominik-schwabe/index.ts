const plugin: Fig.Plugin = {
  name: "zsh-fnm_dominik-schwabe",
  type: "shell",
  description: "Plugin for ZSH to install the Fast Node Manager (fnm).",
  authors: [
    {
      name: "dominik-schwabe",
      github: "dominik-schwabe",
    },
  ],
  github: "dominik-schwabe/zsh-fnm",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-fnm.plugin.zsh"],
  },
};

export default plugin;
