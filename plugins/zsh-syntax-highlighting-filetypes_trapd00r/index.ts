const plugin: Fig.Plugin = {
  name: "zsh-syntax-highlighting-filetypes_trapd00r",
  type: "shell",
  description: "zsh syntax highlighting with dircolors in realtime",
  authors: [
    {
      name: "trapd00r",
      github: "trapd00r",
    },
  ],
  github: "trapd00r/zsh-syntax-highlighting-filetypes",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "syntax-highlighting",
    "shell",
    "highlighting",
    "lscolors",
    "ls-colors",
    "dircolors",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-syntax-highlighting-filetypes.zsh"],
  },
};

export default plugin;
