const plugin: Fig.Plugin = {
  name: "terraform (jsporna)",
  type: "shell",
  description: "ZSH plugin to easier work with terraform",
  github: "jsporna/terraform-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "devops",
    "terraform",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
