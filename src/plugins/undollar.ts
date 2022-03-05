const plugin: Fig.Plugin = {
  name: "undollar",
  type: "shell",
  description: "Zsh plugin who strips the dollar sign from the beginning of the terminal command",
  github: "zpm-zsh/undollar",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zpm",
    "undollar",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
