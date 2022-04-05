const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "zsh-fzy_aperezdc",
  type: "shell",
  description: "Use the fzy fuzzy-finder in Zsh",
  authors: [
    {
      name: "aperezdc",
      github: "aperezdc",
    },
  ],
  github: "aperezdc/zsh-fzy",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "plugin", "fuzzy-finder", "fzy"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-fzy.plugin.zsh"],
  },
};

export default plugin;
