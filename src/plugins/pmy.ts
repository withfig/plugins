const plugin: Fig.Plugin = {
  name: "pmy",
  type: "shell",
  description: "🚀 General purpose context-aware zsh completion engine powered by fuzzy finder.",
  github: "relastle/pmy",
  shells: ["zsh"],
  tags: [
    "zsh",
    "productivity",
    "fzf",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
