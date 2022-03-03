const plugin: Fig.Plugin = {
  name: "vim-mode",
  type: "shell",
  description: "Friendly bindings for ZSH's vi mode",
  github: "softmoth/zsh-vim-mode",
  shells: ["zsh"],
  tags: [
    "zsh",
    "prompt",
    "cursor",
    "vi-mode",
    "bindkey",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
