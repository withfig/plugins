const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "mage2docker_lukaszolszewski",
  displayName: "Mage2Docker",
  type: "shell",
  description: "Mage2Docker - Plugin for Oh-My-Zsh",
  authors: [
    {
      name: "lukaszolszewski",
      github: "lukaszolszewski",
    },
  ],
  github: "lukaszolszewski/mage2docker",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "docker", "oh-my-zsh", "magento2"],
  installation: {
    origin: "github",
    sourceFiles: ["mage2docker.plugin.zsh"],
  },
};

export default plugin;
