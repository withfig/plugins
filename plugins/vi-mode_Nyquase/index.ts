const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "vi-mode_Nyquase",
  type: "shell",
  description: "Oh-my-zsh plugin for vim emulation, but actually usable",
  authors: [
    {
      name: "Nyquase",
      github: "Nyquase",
    },
  ],
  github: "Nyquase/vi-mode",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugins", "vim", "oh-my-zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["vi-mode.plugin.zsh"],
  },
};

export default plugin;
