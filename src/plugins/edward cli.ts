const plugin: Fig.Plugin = {
  name: "edward cli",
  type: "shell",
  description: "zsh plugin to provide completions and aliases for the edward (micro-service/command launcher) CLI tool",
  github: "matthieusb/zsh-edward",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
