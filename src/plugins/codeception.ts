const plugin: Fig.Plugin = {
  name: "codeception",
  type: "shell",
  description: "A oh-my-zsh plugin for codeception command completion.",
  github: "shengyou/codeception-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
