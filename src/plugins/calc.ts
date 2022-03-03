const plugin: Fig.Plugin = {
  name: "calc",
  type: "shell",
  description: "zsh calculator - with support for basic math",
  github: "arzzen/calc.plugin.zsh",
  shells: ["zsh"],
  tags: [
    "plugin",
    "shell",
    "bash",
    "zsh",
    "calculator",
    "ohmyzsh-plugin",
    "calc",
    "zsh-calculator",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
