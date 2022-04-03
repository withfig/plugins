const plugin: Fig.Plugin = {
  name: "zsh-you-should-use_MichaelAquilina",
  displayName: "zsh-you-should-use",
  icon: "📎",
  type: "shell",
  description: "ZSH plugin that reminds you to use existing aliases for commands you just typed",
  authors: [
    {
      name: "MichaelAquilina",
      github: "MichaelAquilina",
    },
  ],
  github: "MichaelAquilina/zsh-you-should-use",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "aliases", "productivity", "alias", "reminders"],
  installation: {
    origin: "github",
    sourceFiles: ["you-should-use.plugin.zsh"],
  },
};

export default plugin;
