const plugin: Fig.Plugin = {
  name: "azure-subscription",
  type: "shell",
  description: "Azure Subscription prompt plugin for zsh",
  github: "dmakeienko/azure-subscription-prompt",
  shells: ["zsh"],
  tags: [
    "zsh",
    "devops",
    "azure",
    "devops-tools",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
