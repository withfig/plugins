const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zsh-sudo_hcgraf",
  displayName: "Zsh Sudo",
  type: "shell",
  description: 'Extracted "sudo" plugin from oh-my-zsh',
  authors: [
    {
      name: "hcgraf",
      github: "hcgraf",
    },
  ],
  github: "hcgraf/zsh-sudo",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["sudo.plugin.zsh"],
  },
};

export default plugin;
