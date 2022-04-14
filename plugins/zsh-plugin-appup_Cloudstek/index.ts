const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "zsh-plugin-appup_Cloudstek",
  displayName: "Zsh Plugin Appup",
  type: "shell",
  description:
    "The command that can save you typing 15 characters or more, each time!",
  authors: [
    {
      name: "Cloudstek",
      github: "Cloudstek",
    },
  ],
  github: "Cloudstek/zsh-plugin-appup",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "zsh",
    "docker",
    "vagrant",
    "docker-compose",
    "aliases",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["appup.plugin.zsh"],
  },
};

export default plugin;
