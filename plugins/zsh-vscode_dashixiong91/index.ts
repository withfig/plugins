const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-vscode_dashixiong91",
  displayName: "Zsh VSCode",
  type: "shell",
  description: "a oh-my-zsh plugin to open file in vscode",
  authors: [
    {
      name: "dashixiong91",
      github: "dashixiong91",
    },
  ],
  github: "dashixiong91/zsh-vscode",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["oh-my-zsh-plugin", "vscode"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-vscode.plugin.zsh"],
  },
};

export default plugin;
