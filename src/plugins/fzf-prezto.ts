const plugin: Fig.Plugin = {
  name: "fzf-prezto",
  type: "shell",
  description: "fzf module for Prezto ZSH framework",
  github: "lildude/fzf-prezto",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "prezto",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
