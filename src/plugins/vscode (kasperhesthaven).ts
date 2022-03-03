const plugin: Fig.Plugin = {
  name: "vscode (kasperhesthaven)",
  type: "shell",
  description: "🔧 A oh-my-zsh plugin to open VS code a little easier",
  github: "kasperhesthaven/vscode",
  shells: ["zsh"],
  tags: [
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
