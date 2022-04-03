const plugin: Fig.Plugin = {
  name: "autoupdate-oh-my-zsh-plugins_TamCore",
  type: "shell",
  description: "Plugin for oh-my-zsh to automatically update custom-plugins",
  authors: [
    {
      name: "TamCore",
      github: "TamCore",
    },
  ],
  github: "TamCore/autoupdate-oh-my-zsh-plugins",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugins", "oh-my-zsh", "oh-my-zsh-plugin", "autoupdate"],
  installation: {
    origin: "github",
    sourceFiles: ["autoupdate.plugin.zsh"],
  },
};

export default plugin;
