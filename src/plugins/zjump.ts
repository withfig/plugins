const plugin: Fig.Plugin = {
  name: "zjump",
  type: "shell",
  description: "Simplify zsh directory navigation; jump to already visited, parent or sub folders.",
  github: "qoomon/zjump",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "console",
    "terminal",
    "cd",
    "fzf",
    "jump",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
