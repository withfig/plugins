const plugin: Fig.Plugin = {
  name: "change-case",
  type: "shell",
  description: "Plugin for fast swap between upper and lower case in your command line. (ZSH-only)",
  github: "mtxr/zsh-change-case",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
