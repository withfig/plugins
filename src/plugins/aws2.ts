const plugin: Fig.Plugin = {
  name: "aws2",
  type: "shell",
  description: "Small hack to the original AWS plugin to work with version 2 of the AWS cli",
  github: "drgr33n/oh-my-zsh_aws2-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
