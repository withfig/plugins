const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "zsh-vim-plugin_nviennot",
  displayName: "Zsh Vim Plugin",
  type: "shell",
  authors: [
    {
      name: "nviennot",
      github: "nviennot",
    },
  ],
  github: "nviennot/zsh-vim-plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["vim.plugin.zsh"],
  },
};

export default plugin;
