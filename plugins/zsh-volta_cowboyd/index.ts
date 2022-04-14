const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "zsh-volta_cowboyd",
  displayName: "Volta's Zsh Theme",
  type: "shell",
  description: "Zsh plugin to seamlessly install and configure volta",
  authors: [
    {
      name: "cowboyd",
      github: "cowboyd",
      twitter: "cowboyd",
    },
  ],
  github: "cowboyd/zsh-volta",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "volta",
    "nodejs",
    "shell",
    "zsh-plugin",
    "zsh-plugins",
    "zsh-configuration",
    "zshell",
    "zimfw",
    "antigen",
    "zinit",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-volta.plugin.zsh"],
  },
};

export default plugin;
