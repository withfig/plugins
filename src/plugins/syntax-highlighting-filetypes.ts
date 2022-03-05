const plugin: Fig.Plugin = {
  name: "syntax-highlighting-filetypes",
  type: "shell",
  description: "zsh syntax highlighting with dircolors in realtime",
  github: "trapd00r/zsh-syntax-highlighting-filetypes",
  shells: ["zsh"],
  tags: [
    "syntax-highlighting",
    "shell",
    "zsh",
    "highlighting",
    "dircolors",
    "ls-colors",
    "lscolors",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
