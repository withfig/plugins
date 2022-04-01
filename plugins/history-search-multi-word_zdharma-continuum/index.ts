const plugin: Fig.Plugin = {
  name: "history-search-multi-word_zdharma-continuum",
  type: "shell",
  authors: [
    {
      name: "zdharma-continuum",
      github: "zdharma-continuum",
    }
  ],
  github: "zdharma-continuum/history-search-multi-word",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["history-search-multi-word.plugin.zsh"],
  },
};

export default plugin;
