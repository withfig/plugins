const plugin: Fig.Plugin = {
  name: "startup-timer",
  type: "shell",
  description: "A zsh plugin to print the time it takes for the shell to start up",
  github: "paulmelnikow/zsh-startup-timer",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
