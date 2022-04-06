const plugin: Fig.Plugin = {
  icon: "😎",
  name: "cf-zsh-autocomplete-plugin_norman-abramovitz",
  type: "shell",
  description: "Cloud Foundry CLI zsh complete plugin",
  authors: [
    {
      name: "norman-abramovitz",
      github: "norman-abramovitz",
    },
  ],
  github: "norman-abramovitz/cf-zsh-autocomplete-plugin",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["cf-zsh-autocomplete-plugin.plugin.zsh"],
  },
};

export default plugin;
