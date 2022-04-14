const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "n.zsh_gretzky",
  displayName: "N.Zsh (gretzky)",
  type: "shell",
  description: "zsh plugin for switching node versions automatically with n",
  authors: [
    {
      name: "gretzky",
      github: "gretzky",
    },
  ],
  github: "gretzky/n.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "node-version-manager", "n"],
  installation: {
    origin: "github",
    sourceFiles: ["n.plugin.zsh"],
  },
};

export default plugin;
