const plugin: Fig.Plugin = {
  name: "sublime",
  type: "shell",
  description: "Same as the official Sublime plugin for Oh My Zsh, but this opens files in the current Sublime window, if there is one already open.",
  github: "valentinocossar/sublime",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
