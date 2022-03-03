const plugin: Fig.Plugin = {
  name: "proxy",
  type: "shell",
  description: "🔩 An oh-my-zsh plugin to configure proxy",
  github: "SukkaW/zsh-proxy",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "proxy",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
