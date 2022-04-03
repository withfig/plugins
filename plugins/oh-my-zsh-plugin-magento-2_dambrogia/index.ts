const plugin: Fig.Plugin = {
  name: "oh-my-zsh-plugin-magento-2_dambrogia",
  type: "shell",
  description: "Magento 2 auto complete plugin for oh-my-zsh",
  authors: [
    {
      name: "dambrogia",
      github: "dambrogia",
    },
  ],
  github: "dambrogia/oh-my-zsh-plugin-magento-2",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["magento-2.plugin.zsh"],
  },
};

export default plugin;
