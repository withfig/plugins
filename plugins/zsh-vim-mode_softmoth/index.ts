const plugin: Fig.Plugin = {
  name: "zsh-vim-mode_softmoth",
  type: "shell",
  description: "Friendly bindings for ZSH's vi mode",
  authors: [
    {
      name: "softmoth",
      github: "softmoth",
    },
  ],
  github: "softmoth/zsh-vim-mode",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "vi-mode", "bindkey", "prompt", "cursor"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-vim-mode.plugin.zsh"],
  },
};

export default plugin;
