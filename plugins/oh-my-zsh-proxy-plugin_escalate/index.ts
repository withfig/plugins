const plugin: Fig.Plugin = {
  name: "oh-my-zsh-proxy-plugin_escalate",
  type: "shell",
  description: "An oh-my-zsh plugin to quickly enable and disable proxy shell environment settings",
  authors: [
    {
      name: "escalate",
      github: "escalate",
    },
  ],
  github: "escalate/oh-my-zsh-proxy-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["oh-my-zsh-plugin", "proxy", "oh-my-zsh", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["proxy.plugin.zsh"],
  },
};

export default plugin;
