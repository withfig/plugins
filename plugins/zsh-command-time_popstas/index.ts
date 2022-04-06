const plugin: Fig.Plugin = {
  icon: "⏲️",
  name: "zsh-command-time_popstas",
  displayName: "Zsh Command Time",
  type: "shell",
  description: "Show execution time for long running commands in zsh",
  authors: [
    {
      name: "popstas",
      github: "popstas",
    },
  ],
  github: "popstas/zsh-command-time",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh", "zsh-command-time", "powerlevel9k"],
  installation: {
    origin: "github",
    sourceFiles: ["command-time.plugin.zsh"],
  },
};

export default plugin;
