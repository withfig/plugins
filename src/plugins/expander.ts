const plugin: Fig.Plugin = {
  name: "expander",
  type: "shell",
  description: "predictable fzf-based completion for zsh",
  github: "ianthehenry/zsh-expander",
  shells: ["zsh"],
  tags: [
    "fzf",
    "zsh-plugin",
    "zle-widgets",
    "zle",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
