const plugin: Fig.Plugin = {
  name: "zsh-auto-notify_MichaelAquilina",
  type: "shell",
  description: " ⏰ ZSH plugin that automatically sends out a notification when a long running task has completed.",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    }
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
