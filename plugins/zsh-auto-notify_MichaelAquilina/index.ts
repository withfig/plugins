const plugin: Fig.Plugin = {
  icon: "⏲️",
  name: "zsh-auto-notify_MichaelAquilina",
  displayName: "Zsh Auto-Notify",
  type: "shell",
  // screenshots: ["https://github.com/MichaelAquilina/zsh-auto-notify/blob/master/img/notification-example.png?raw=true"],
  description:
    " ⏰ ZSH plugin that automatically sends out a notification when a long running task has completed.",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    },
  ],
  github: "MichaelAquilina/zsh-auto-notify",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-notify.plugin.zsh"],
  },
};

export default plugin;
