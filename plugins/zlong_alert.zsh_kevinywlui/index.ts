const plugin: Fig.Plugin = {
  icon: "😎",
  name: "zlong_alert.zsh_kevinywlui",
  displayName: "Zlong Alert",
  type: "shell",
  description: "A plugin to alert you when a long-running command has finished",
  authors: [
    {
      name: "kevinywlui",
      github: "kevinywlui",
    },
  ],
  github: "kevinywlui/zlong_alert.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "plugin", "alert"],
  installation: {
    origin: "github",
    sourceFiles: ["zlong_alert.plugin.zsh"],
  },
};

export default plugin;
