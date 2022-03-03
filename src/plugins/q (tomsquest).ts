const plugin: Fig.Plugin = {
  name: "q (tomsquest)",
  type: "shell",
  description: "ZSH plugin for the Q debug tool",
  github: "tomsquest/q.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
