const plugin: Fig.Plugin = {
  name: "zsh-dircolors-solarized_joel-porquet",
  type: "shell",
  description: "Solarized dircolors plugin for zsh",
  authors: [
    {
      name: "joel-porquet",
      github: "joel-porquet",
    },
  ],
  github: "joel-porquet/zsh-dircolors-solarized",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "solarized-dircolors", "solarized-theme", "antigen"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-dircolors-solarized.plugin.zsh"],
  },
};

export default plugin;
