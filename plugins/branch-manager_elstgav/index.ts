const plugin: Fig.Plugin = {
  name: "branch-manager_elstgav",
  displayName: "Branch Manager",
  description: "oh-my-zsh plugin for managing branches",
  icon: "⌨️",
  type: "shell",
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
