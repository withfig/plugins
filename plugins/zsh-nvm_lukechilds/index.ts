const plugin: Fig.Plugin = {
  name: "zsh-nvm_lukechilds",
  type: "shell",
  description: "Zsh plugin for installing, updating and loading nvm",
  authors: [
    {
      name: "lukechilds",
      github: "lukechilds",
      twitter: "lukechilds",
    }
  ],
  github: "lukechilds/zsh-nvm",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "version-manager",
    "nvm",
    "zsh-nvm",
    "zsh-plugins",
    "antigen",
    "oh-my-zsh",
    "zplug",
    "zgen",
    "zim",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-nvm.plugin.zsh"],
  },
};

export default plugin;
