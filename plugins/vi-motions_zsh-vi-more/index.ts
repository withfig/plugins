const plugin: Fig.Plugin = {
  name: "vi-motions_zsh-vi-more",
  type: "shell",
  description: "All the motions you could ask for and more for Zsh's vi mode.",
  authors: [
    {
      name: "zsh-vi-more",
      github: "zsh-vi-more",
    },
  ],
  github: "zsh-vi-more/vi-motions",
  license: ["ISC"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh-plugin", "vi-mode", "vi-keybinds", "vi-motions"],
  installation: {
    origin: "github",
    sourceFiles: ["motions.plugin.zsh"],
  },
};

export default plugin;
