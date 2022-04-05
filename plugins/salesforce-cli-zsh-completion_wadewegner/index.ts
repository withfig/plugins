const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "salesforce-cli-zsh-completion_wadewegner",
  type: "shell",
  description:
    "A Zsh completion file for the Salesforce CLI (and script for updating it)",
  authors: [
    {
      name: "wadewegner",
      github: "wadewegner",
    },
  ],
  github: "wadewegner/salesforce-cli-zsh-completion",
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["generate.sh"],
    },
    zsh: {
      sourceFiles: ["salesforce-cli-zsh-completion.plugin.zsh"],
    },
  },
};

export default plugin;
