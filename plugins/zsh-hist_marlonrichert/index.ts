const plugin: Fig.Plugin = {
  name: "zsh-hist_marlonrichert",
  type: "shell",
  description: "📝 Edit your Zsh history from the command line.",
  authors: [
    {
      name: "marlonrichert",
      github: "marlonrichert",
      twitter: "MarlonRichert",
    },
  ],
  github: "marlonrichert/zsh-hist",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "history",
    "history-management",
    "hist",
    "zsh-history",
    "edit",
    "delete",
    "plugin",
    "plugins",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-hist.plugin.zsh"],
  },
};

export default plugin;
