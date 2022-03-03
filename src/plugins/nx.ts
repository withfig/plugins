const plugin: Fig.Plugin = {
  name: "nx",
  type: "shell",
  description: "Nx Devtools completion plugin for Zsh.",
  github: "jscutlery/nx-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "nx",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
