const plugin: Fig.Plugin = {
  name: "iterm-tab-color",
  type: "shell",
  description: "Oh My Zsh plugin for setting iTerm2's custom tab colors",
  github: "bernardop/iterm-tab-color-oh-my-zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
