const plugin: Fig.Plugin = {
  name: "zsh-command-time_popstas",
  type: "shell",
  description: "Show execution time for long commands in zsh",
  authors: [
    {
      name: "popstas",
      github: "popstas",
    }
  ],
  github: "popstas/zsh-command-time",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "oh-my-zsh",
    "zsh-command-time",
    "powerlevel9k",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["command-time.plugin.zsh"],
  },
};

export default plugin;
