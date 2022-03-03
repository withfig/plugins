const plugin: Fig.Plugin = {
  name: "dircolors-solarized (joel-porquet)",
  type: "shell",
  description: "Solarized dircolors plugin for zsh",
  github: "joel-porquet/zsh-dircolors-solarized",
  shells: ["zsh"],
  tags: [
    "zsh",
    "antigen",
    "solarized-theme",
    "solarized-dircolors",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
