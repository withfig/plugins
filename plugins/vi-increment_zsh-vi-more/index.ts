const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "vi-increment_zsh-vi-more",
  displayName: "Vi Increment",
  type: "shell",
  description: "Zsh: Vim-style increment/decrement in vicmd, visual keymaps",
  authors: [
    {
      name: "zsh-vi-more",
      github: "zsh-vi-more",
    },
  ],
  github: "zsh-vi-more/vi-increment",
  license: ["ISC"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "vi-mode", "vi-keybinds"],
  installation: {
    origin: "github",
    sourceFiles: ["vi-increment.plugin.zsh"],
  },
};

export default plugin;
