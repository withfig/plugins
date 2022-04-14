const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "zsh-fzf-history-search_joshskidmore",
  displayName: "Zsh Fzf History Search",
  type: "shell",
  description:
    "A simple zsh plugin that replaces Ctrl+R with an fzf-driven select which includes date/times.",
  authors: [
    {
      name: "joshskidmore",
      github: "joshskidmore",
    },
  ],
  github: "joshskidmore/zsh-fzf-history-search",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-fzf-history-search.plugin.zsh"],
  },
};

export default plugin;
