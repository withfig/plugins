const plugin: Fig.Plugin = {
  name: "zsh-extend-history_xav-b",
  type: "shell",
  description: "Zsh plugin to record command history with more context",
  authors: [
    {
      name: "xav-b",
      github: "xav-b",
      twitter: "XavierBruhiere",
    }
  ],
  github: "xav-b/zsh-extend-history",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["extend-history.plugin.zsh"],
  },
};

export default plugin;
