const plugin: Fig.Plugin = {
  name: "aws-mfa",
  type: "shell",
  description: "oh-my-zsh plugin for AWS MFA",
  github: "FreebirdRides/oh-my-zsh-aws-mfa",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
