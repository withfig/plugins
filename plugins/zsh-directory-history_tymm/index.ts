const plugin: Fig.Plugin = {
  name: "zsh-directory-history_tymm",
  type: "shell",
  description: "Giving you a history which is sensitive to the directory you are currently in",
  authors: [
    {
      name: "tymm",
      github: "tymm",
    }
  ],
  github: "tymm/zsh-directory-history",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["directory-history.plugin.zsh"],
  },
};

export default plugin;
