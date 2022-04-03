const plugin: Fig.Plugin = {
  name: "zsh-aws-vault_blimmer",
  type: "shell",
  description: "oh-my-zsh plugin for aws-vault",
  authors: [
    {
      name: "blimmer",
      github: "blimmer",
    },
  ],
  github: "blimmer/zsh-aws-vault",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["oh-my-zsh", "oh-my-zsh-plugin", "aws-vault", "zsh-plugin", "zsh", "prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-aws-vault.plugin.zsh"],
  },
};

export default plugin;
