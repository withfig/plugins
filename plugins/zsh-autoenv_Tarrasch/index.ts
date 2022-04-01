const plugin: Fig.Plugin = {
  name: "zsh-autoenv_Tarrasch",
  type: "shell",
  description: "Autoenv for zsh",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    }
  ],
  github: "Tarrasch/zsh-autoenv",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zshrc",
    "autoenv",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["autoenv.plugin.zsh"],
  },
};

export default plugin;
