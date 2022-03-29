const plugin: Fig.Plugin = {
  name: "nx-completion_jscutlery",
  type: "shell",
  description: "Nx Devtools completion plugin for Zsh.",
  authors: [
    {
      name: "jscutlery",
      github: "jscutlery",
      twitter: "jscutlery",
    }
  ],
  github: "jscutlery/nx-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "nx",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["nx-completion.plugin.zsh"],
  },
};

export default plugin;
