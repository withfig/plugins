const plugin: Fig.Plugin = {
  name: "volta (cowboyd)",
  type: "shell",
  description: "Zsh plugin to seamlessly install and configure volta",
  github: "cowboyd/zsh-volta",
  shells: ["zsh"],
  tags: [
    "nodejs",
    "shell",
    "antigen",
    "zsh-plugin",
    "zsh-plugins",
    "zsh-configuration",
    "zshell",
    "volta",
    "zimfw",
    "zinit",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
