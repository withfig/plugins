const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zsh-toggle-command-prefix_xPMo",
  type: "shell",
  description: "Zsh widget to toggle a prefix on a command",
  authors: [
    {
      name: "xPMo",
      github: "xPMo",
    },
  ],
  github: "xPMo/zsh-toggle-command-prefix",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-widget", "sudo", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["toggle-command-prefix.plugin.zsh"],
  },
};

export default plugin;
