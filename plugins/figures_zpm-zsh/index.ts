const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "figures_zpm-zsh",
  displayName: "Figures (ZPM)",
  type: "shell",
  description: "Unicode symbols for ZSH",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/figures",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["figures.plugin.zsh"],
  },
};

export default plugin;
