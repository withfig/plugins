const plugin: Fig.Plugin = {
  name: "dotfiles-plugin_vladmyr",
  type: "shell",
  description: "Keep your dotfiles in sync using Git, a plugin for Oh My Zsh",
  authors: [
    {
      name: "vladmyr",
      github: "vladmyr",
    }
  ],
  github: "vladmyr/dotfiles-plugin",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "git",
    "shell",
    "dotfiles",
    "oh-my-zsh",
    "plugin",
    "sync",
    "synchronization",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"install.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"dotfiles.plugin.zsh"
      ],
    },
  },
};

export default plugin;
