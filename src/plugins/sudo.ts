const plugin: Fig.Plugin = {
  name: "sudo",
  type: "shell",
  description: "Extracted \"sudo\" plugin from oh-my-zsh",
  github: "hcgraf/zsh-sudo",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
