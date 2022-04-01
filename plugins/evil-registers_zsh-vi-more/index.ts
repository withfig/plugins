const plugin: Fig.Plugin = {
  name: "evil-registers_zsh-vi-more",
  type: "shell",
  description: "Access external clipboards in vi-mode keymaps",
  authors: [
    {
      name: "zsh-vi-more",
      github: "zsh-vi-more",
    }
  ],
  github: "zsh-vi-more/evil-registers",
  license: ["ISC"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh-plugin",
    "vi-mode",
    "clipboard-sync",
    "wayland-client",
    "clipboard-copy",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["evil-registers.plugin.zsh"],
  },
};

export default plugin;
