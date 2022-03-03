const plugin: Fig.Plugin = {
  name: "zlong_alert",
  type: "shell",
  description: "A plugin to alert you when a long-running command has finished",
  github: "kevinywlui/zlong_alert.zsh",
  shells: ["zsh"],
  tags: [
    "plugin",
    "zsh",
    "alert",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
