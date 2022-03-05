const plugin: Fig.Plugin = {
  name: "last-working-dir-tmux",
  type: "shell",
  description: "Zsh plugin to load last working dir within a tmux session",
  github: "Curly-Mo/last-working-dir-tmux",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
