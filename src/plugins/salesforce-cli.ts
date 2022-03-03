const plugin: Fig.Plugin = {
  name: "salesforce-cli",
  type: "shell",
  description: "A Zsh completion file for the Salesforce CLI (and script for updating it)",
  github: "wadewegner/salesforce-cli-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
