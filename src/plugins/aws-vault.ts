const plugin: Fig.Plugin = {
  name: "aws-vault",
  type: "shell",
  description: "oh-my-zsh plugin for aws-vault",
  github: "blimmer/zsh-aws-vault",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "prompt",
    "zsh-plugin",
    "oh-my-zsh-plugin",
    "aws-vault",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
