const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "nx-completion_jscutlery",
  displayName: "Nx Completion",
  description: "Nx Devtools completion plugin for Zsh.",
  screenshots: [
    "https://user-images.githubusercontent.com/8522558/111908149-67e8d780-8a58-11eb-9343-691f6d664163.gif",
  ],
  type: "shell",
  authors: [
    {
      name: "jscutlery",
      github: "jscutlery",
      twitter: "jscutlery",
    },
  ],
  github: "jscutlery/nx-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["zsh", "zsh-plugin", "nx"],
  installation: {
    origin: "github",
    sourceFiles: ["nx-completion.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "nx",
      },
      {
        type: "binary",
        name: "jq",
      },
    ],
  },
};

export default plugin;
