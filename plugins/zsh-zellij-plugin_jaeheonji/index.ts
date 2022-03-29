const plugin: Fig.Plugin = {
  name: "zsh-zellij-plugin_jaeheonji",
  type: "shell",
  description: "Zsh Plugin for Zellij",
  authors: [
    {
      name: "jaeheonji",
      github: "jaeheonji",
    }
  ],
  github: "jaeheonji/zsh-zellij-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zellij",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zellij.plugin.zsh"],
  },
};

export default plugin;
