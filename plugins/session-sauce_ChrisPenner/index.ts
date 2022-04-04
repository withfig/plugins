const plugin: Fig.Plugin = {
  name: "session-sauce_ChrisPenner",
  type: "shell",
  description: "Shell plugin for managing tmux sessions",
  authors: [
    {
      name: "ChrisPenner",
      github: "ChrisPenner",
      twitter: "chrislpenner",
    },
  ],
  github: "ChrisPenner/session-sauce",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["session-sauce.plugin.zsh"],
  },
};

export default plugin;
