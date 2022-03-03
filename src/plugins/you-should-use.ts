const plugin: Fig.Plugin = {
  name: "you-should-use",
  type: "shell",
  description: "📎 ZSH plugin that reminds you to use existing aliases for commands you just typed",
  github: "MichaelAquilina/zsh-you-should-use",
  shells: ["zsh"],
  tags: [
    "zsh",
    "productivity",
    "aliases",
    "alias",
    "zsh-plugin",
    "reminders",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
