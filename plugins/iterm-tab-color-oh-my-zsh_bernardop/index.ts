const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "iterm-tab-color-oh-my-zsh_bernardop",
  type: "shell",
  description: "Oh My Zsh plugin for setting iTerm2's custom tab colors",
  authors: [
    {
      name: "bernardop",
      github: "bernardop",
    },
  ],
  github: "bernardop/iterm-tab-color-oh-my-zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "oh-my-zsh-plugin", "oh-my-zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["iterm-tab-color.plugin.zsh"],
  },
};

export default plugin;
