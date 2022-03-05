const plugin: Fig.Plugin = {
  name: "iterm2-colors",
  type: "shell",
  description: "A zsh plugin to manage your iterm2's color scheme from the command line",
  github: "shayneholmes/zsh-iterm2colors",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
