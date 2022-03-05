const plugin: Fig.Plugin = {
  name: "terraform (macunha1)",
  type: "shell",
  description: "Terraform plugin for ZSH with Oh-my-zsh support, including convenient aliases and autocompletion",
  github: "macunha1/zsh-terraform",
  shells: ["zsh"],
  tags: [
    "zsh",
    "autocompletion",
    "terraform",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
