const plugin: Fig.Plugin = {
  name: "titles",
  type: "shell",
  description: "Terminal/tmux titles based on current location and task",
  github: "jreese/zsh-titles",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-titles",
    "tmux-titles",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
