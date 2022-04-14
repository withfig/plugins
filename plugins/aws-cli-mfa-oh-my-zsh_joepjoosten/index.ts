const plugin: Fig.Plugin = {
  name: "aws-cli-mfa-oh-my-zsh_joepjoosten",
  displayName: "AWS CLI Mfa Oh My Zsh",
  description: "oh-my-zsh plugin for easy aws mfa access",
  icon: "🗝",
  type: "shell",
  authors: [
    {
      name: "joepjoosten",
      github: "joepjoosten",
    },
  ],
  github: "joepjoosten/aws-cli-mfa-oh-my-zsh",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["aws-mfa.plugin.zsh"],
  },
};

export default plugin;
