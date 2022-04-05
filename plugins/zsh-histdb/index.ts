const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zsh-histdb",
  type: "shell",
  description: "A slightly better history for zsh",
  authors: [
    {
      name: "larkery",
      github: "larkery",
    },
  ],
  github: "larkery/zsh-histdb",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "history"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-histdb.plugin.zsh"],
  },
};

export default plugin;
