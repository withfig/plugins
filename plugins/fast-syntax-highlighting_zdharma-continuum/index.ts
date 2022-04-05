const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "fast-syntax-highlighting_zdharma-continuum",
  type: "shell",
  description: "Feature-rich syntax highlighting for ZSH",
  authors: [
    {
      name: "zdharma-continuum",
      github: "zdharma-continuum",
    },
  ],
  github: "zdharma-continuum/fast-syntax-highlighting",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "syntax-highlighting", "zinit"],
  installation: {
    origin: "github",
    sourceFiles: ["fast-syntax-highlighting.plugin.zsh"],
  },
};

export default plugin;
