const plugin: Fig.Plugin = {
  name: "zsh-vi-mode",
  type: "shell",
  description: "💻 A better and friendly vi(vim) mode plugin for ZSH.",
  authors: [
    {
      name: "jeffreytse",
      github: "jeffreytse",
      twitter: "jeffreytsez",
    },
  ],
  github: "jeffreytse/zsh-vi-mode",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "awesome",
    "oh-my-zsh",
    "shell-scripts",
    "zsh-plugins",
    "vi-keybinds",
    "vim",
    "terminal",
    "shell",
    "zplug",
    "antigen",
    "zgen",
    "surround",
    "command-line-tool",
    "clipboard",
    "zinit",
    "like",
    "keybinding",
    "productivity",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-vi-mode.plugin.zsh"],
  },
};

export default plugin;
