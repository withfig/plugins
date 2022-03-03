const plugin: Fig.Plugin = {
  name: "aws_manager completions",
  type: "shell",
  description: "Oh My ZSH plugin for aws_manager CLI",
  github: "EslamElHusseiny/aws_manager_plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
