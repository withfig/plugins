const plugin: Fig.Plugin = {
  name: "vi-quote",
  type: "shell",
  description: "A plugin to add a quote/unquote action to Zsh vi mode",
  github: "zsh-vi-more/vi-quote",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
    "vi-mode",
    "vi-keybinds",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
