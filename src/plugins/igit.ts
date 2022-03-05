const plugin: Fig.Plugin = {
  name: "igit",
  type: "shell",
  description: "Interactive git commands using fzf, available as zsh plugin",
  github: "ytakahashi/igit",
  shells: ["zsh"],
  tags: [
    "git",
    "zsh",
    "fzf",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
