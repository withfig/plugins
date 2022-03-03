const plugin: Fig.Plugin = {
  name: "mage2docker",
  type: "shell",
  description: "Mage2Docker - Plugin for Oh-My-Zsh",
  github: "lukaszolszewski/mage2docker",
  shells: ["zsh"],
  tags: [
    "docker",
    "zsh",
    "oh-my-zsh",
    "magento2",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
