const plugin: Fig.Plugin = {
  name: "fly-zsh-autocomplete",
  type: "shell",
  description: "Concourse CLI zsh complete plugin",
  github: "sbodiu-pivotal/fly-zsh-autocomplete-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
