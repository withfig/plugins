const plugin: Fig.Plugin = {
  name: "terraform (pbar1)",
  type: "shell",
  description: "Terraform convenience functions and aliases for ZSH",
  github: "pbar1/zsh-terraform",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "terraform",
    "zplug",
    "zgen",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
