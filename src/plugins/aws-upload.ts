const plugin: Fig.Plugin = {
  name: "aws-upload",
  type: "shell",
  description: "A zsh plugin for aws-upload",
  github: "borracciaBlu/aws-upload-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zsh-completions",
    "aws-upload",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
