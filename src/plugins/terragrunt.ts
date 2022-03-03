const plugin: Fig.Plugin = {
  name: "terragrunt",
  type: "shell",
  description: "oh-my-zsh-plugin for terragrunt",
  github: "hanjunlee/terragrunt-oh-my-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
