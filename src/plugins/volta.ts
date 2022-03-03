const plugin: Fig.Plugin = {
  name: "volta",
  type: "shell",
  description: "ZSH Plugin to install and load Volta: JS Toolchains as Code. ⚡",
  github: "ri7nz/zsh-volta",
  shells: ["zsh"],
  tags: [
    "tools",
    "zsh-plugin",
    "volta",
    "volta-plugin-zsh",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
