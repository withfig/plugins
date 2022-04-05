const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "zsh-vim-plugin_nviennot",
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
