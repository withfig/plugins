const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "salesforce-cli-zsh-completion_wadewegner",
  displayName: "Salesforce CLI Zsh Completion",
  type: "shell",
  description:
    "A Zsh completion file for the Salesforce CLI (and script for updating it)",
  authors: [
    {
      name: "wadewegner",
      github: "wadewegner",
      twitter: "WadeWegner",
    },
  ],
  github: "wadewegner/salesforce-cli-zsh-completion",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["salesforce-cli-zsh-completion.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "sfdx",
      },
      {
        type: "binary",
        name: "jq",
      },
    ],
  },
};

export default plugin;
