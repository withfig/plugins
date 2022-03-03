const plugin: Fig.Plugin = {
  name: "search-directory-history",
  type: "shell",
  description: "In support of Oh-My-Zsh plugin per-directory-history, I've created a crude searching mechanism, not having time to paint it, or build it to scale...",
  github: "cmaahs/search-directory-history",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
