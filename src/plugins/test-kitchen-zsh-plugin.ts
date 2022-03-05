const plugin: Fig.Plugin = {
  name: "test-kitchen-zsh-plugin",
  type: "shell",
  description: "ZSH plugin for kitchen-test autocompletion",
  github: "pelletiermaxime/test-kitchen-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
