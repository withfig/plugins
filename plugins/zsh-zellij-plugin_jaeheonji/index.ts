const plugin: Fig.Plugin = {
  icon: "💾",
  name: "zsh-zellij-plugin_jaeheonji",
  displayName: "Zsh Zellij Plugin",
  type: "shell",
  description: "Zsh Plugin for Zellij",
  authors: [
    {
      name: "jaeheonji",
      github: "jaeheonji",
    },
  ],
  github: "jaeheonji/zsh-zellij-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zellij", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["zellij.plugin.zsh"],
  },
};

export default plugin;
