const plugin: Fig.Plugin = {
  name: "directory-history",
  type: "shell",
  description: "Giving you a history which is sensitive to the directory you are currently in",
  github: "tymm/zsh-directory-history",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
