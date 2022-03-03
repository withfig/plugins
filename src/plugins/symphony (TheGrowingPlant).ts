const plugin: Fig.Plugin = {
  name: "symphony (TheGrowingPlant)",
  type: "shell",
  description: "Oh My Zsh plugin for autocompleting Symfony 3/4 commands",
  github: "TheGrowingPlant/symfony.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "symfony",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
