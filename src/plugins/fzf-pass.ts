const plugin: Fig.Plugin = {
  name: "fzf-pass",
  type: "shell",
  description: "ZSH plugin for better handling of passwords using fuzzy finder",
  github: "smeagol74/zsh-fzf-pass",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
