const plugin: Fig.Plugin = {
  name: "aws-completions",
  type: "shell",
  description: "This plugin provides completion support for awscli to manage AWS profiles/regions and display them in the prompt.",
  github: "eastokes/aws-plugin-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
