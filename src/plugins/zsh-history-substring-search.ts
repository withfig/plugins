const plugin: Fig.Plugin = {
  name: "zsh-history-substring-search",
  type: "shell",
  description: "🐠 ZSH port of Fish history search (up arrow)",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/zsh-history-substring-search",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["history-search", "command-history", "fish-shell", "zsh-plugins"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-history-substring-search.plugin.zsh"],
  },
};

export default plugin;
