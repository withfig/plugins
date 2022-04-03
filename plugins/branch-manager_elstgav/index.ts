const plugin: Fig.Plugin = {
  name: "branch-manager_elstgav",
  type: "shell",
  description: "oh-my-zsh plugin for managing branches",
  authors: [
    {
      name: "elstgav",
      github: "elstgav",
    },
  ],
  github: "elstgav/branch-manager",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["oh-my-zsh-plugin", "oh-my-zsh", "zsh-plugins", "git"],
  installation: {
    origin: "github",
    sourceFiles: ["branch-manager.plugin.zsh"],
  },
};

export default plugin;
