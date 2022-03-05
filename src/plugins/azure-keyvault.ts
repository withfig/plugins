const plugin: Fig.Plugin = {
  name: "azure-keyvault",
  type: "shell",
  description: "A simple zsh plugin to help make using the keyvault feature of the azure cli a little less verbose",
  github: "milespossing/Azure-Keyvault-Zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "azure",
    "azure-cli",
    "keyvault",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
