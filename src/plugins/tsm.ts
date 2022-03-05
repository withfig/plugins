const plugin: Fig.Plugin = {
  name: "tsm",
  type: "shell",
  description: "Tmux Session Manager",
  github: "RobertAudi/tsm",
  shells: ["zsh"],
  tags: [
    "zsh",
    "tmux",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
