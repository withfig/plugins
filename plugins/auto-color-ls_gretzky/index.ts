const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "auto-color-ls_gretzky",
  type: "shell",
  description: "zsh plugin to automatically list directories with colorls ",
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
