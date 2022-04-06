const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "codeception-zsh-plugin_shengyou",
  type: "shell",
  description: "A oh-my-zsh plugin for codeception command completion.",
  authors: [
    {
      name: "shengyou",
      github: "shengyou",
      twitter: "shengyou",
    },
  ],
  github: "shengyou/codeception-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["codeception.plugin.zsh"],
  },
};

export default plugin;
