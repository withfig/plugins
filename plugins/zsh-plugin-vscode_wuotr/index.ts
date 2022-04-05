const plugin: Fig.Plugin = {
  icon: "😎",
  name: "zsh-plugin-vscode_wuotr",
  type: "shell",
  authors: [
    {
      name: "wuotr",
      github: "wuotr",
    },
  ],
  github: "wuotr/zsh-plugin-vscode",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["vscode.plugin.zsh"],
  },
};

export default plugin;
