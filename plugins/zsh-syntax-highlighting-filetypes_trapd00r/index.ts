const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "zsh-syntax-highlighting-filetypes_trapd00r",
  displayName: "zsh-syntax-highlighting with filetypes",
  type: "shell",
  description: "zsh syntax highlighting with dircolors in realtime",
  screenshots: [
    "https://github.com/trapd00r/zsh-syntax-highlighting-filetypes/blob/master/extra/zsh-syntax-hl-ft.png?raw=true",
  ],
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
