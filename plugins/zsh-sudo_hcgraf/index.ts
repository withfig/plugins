const plugin: Fig.Plugin = {
  name: "zsh-sudo_hcgraf",
  type: "shell",
  description: "Extracted \"sudo\" plugin from oh-my-zsh",
  authors: [
    {
      name: "hcgraf",
      github: "hcgraf",
    }
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
