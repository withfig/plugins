const plugin: Fig.Plugin = {
  name: "auto-color-ls_gretzky",
  displayName: "Auto Color LS",
  description: "zsh plugin to automatically list directories with colorls",
  icon: "🌈",
  type: "shell",
  authors: [
    {
      name: "gretzky",
      github: "gretzky",
    },
  ],
  github: "gretzky/auto-color-ls",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "colorls", "auto-ls"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-color-ls.plugin.zsh"],
  },
};

export default plugin;
