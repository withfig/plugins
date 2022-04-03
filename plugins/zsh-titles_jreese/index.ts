const plugin: Fig.Plugin = {
  name: "zsh-titles_jreese",
  type: "shell",
  description: "Terminal/tmux titles based on current location and task",
  authors: [
    {
      name: "jreese",
      github: "jreese",
      twitter: "n7cmdr",
    },
  ],
  github: "jreese/zsh-titles",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "zsh-titles", "tmux-titles"],
  installation: {
    origin: "github",
    sourceFiles: ["titles.plugin.zsh"],
  },
};

export default plugin;
