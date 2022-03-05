const plugin: Fig.Plugin = {
  name: "zabb",
  type: "shell",
  description: "zabb - a plugin for finding z abbreviations",
  github: "Mellbourn/zabb",
  shells: ["zsh"],
  tags: [
    "zsh",
    "z",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
