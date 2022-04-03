const plugin: Fig.Plugin = {
  name: "zsh-syntax-highlighting",
  displayName: "zsh-syntax-highlighting",
  type: "shell",
  description: "Fish shell-like syntax highlighting for zsh",
  icon: "images/zsh-users-icon.png",
  github: "zsh-users/zsh-syntax-highlighting",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Color"],
  screenshots: ["images/1.png", "images/2.png"],
  keywords: ["shell", "syntax-highlighting", "zsh", "screenshot", "zsh-syntax-highlighting"],

  installation: {
    origin: "github",
    sourceFiles: "zsh-syntax-highlighting.zsh",
  },
  configuration: [
    {
      displayName: "Max Length",
      type: "environmentVariable",
      description: "Prevent highlighting for commands greater than this length",
      interface: "text",
      default: 512,
      environmentVariable: "ZSH_HIGHLIGHT_MAXLENGTH",
    },
    {
      displayName: "Highlighters",
      type: "environmentVariable",
      description: "Choose which higlighters you want to use (default is all of them)",
      interface: "multiselect",
      default: ["main", "brackets", "pattern", "cursor"],
      options: ["main", "brackets", "pattern", "cursor", "regexp", "root", "line"],
      environmentVariable: "ZSH_HIGHLIGHT_HIGHLIGHTERS",
    },
  ],
};

export default plugin;
