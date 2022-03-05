const plugin: Fig.Plugin = {
  name: "session-sauce",
  type: "shell",
  description: "Shell plugin for managing tmux sessions",
  github: "ChrisPenner/session-sauce",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
