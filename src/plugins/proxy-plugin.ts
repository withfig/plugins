const plugin: Fig.Plugin = {
  name: "proxy-plugin",
  type: "shell",
  description: "An oh-my-zsh plugin to quickly enable and disable proxy shell environment settings",
  github: "escalate/oh-my-zsh-proxy-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "proxy",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
