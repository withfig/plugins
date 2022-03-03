const plugin: Fig.Plugin = {
  name: "fzf-tab-completion",
  type: "shell",
  description: "Tab completion using fzf",
  github: "lincheney/fzf-tab-completion",
  shells: ["zsh"],
  tags: [
    "bash",
    "rust",
    "zsh",
    "fzf",
    "completion",
    "readline",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
