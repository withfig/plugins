const plugin: Fig.Plugin = {
  name: "aws-cli-mfa",
  type: "shell",
  description: "oh-my-zsh plugin for easy aws mfa access",
  github: "joepjoosten/aws-cli-mfa-oh-my-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
