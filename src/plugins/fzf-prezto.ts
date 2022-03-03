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
    source: "github",
  },
};

export default plugin;
