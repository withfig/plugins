const plugin: Fig.Plugin = {
  name: "mage2docker_lukaszolszewski",
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
