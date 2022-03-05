const plugin: Fig.Plugin = {
  name: "cf-zsh-autocomplete",
  type: "shell",
  description: "Cloud Foundry CLI zsh complete plugin",
  github: "norman-abramovitz/cf-zsh-autocomplete-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
