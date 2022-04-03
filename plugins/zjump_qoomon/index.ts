const plugin: Fig.Plugin = {
  name: "zjump_qoomon",
  type: "shell",
  description: "Simplify zsh directory navigation; jump to already visited, parent or sub folders.",
  authors: [
    {
      name: "qoomon",
      github: "qoomon",
      twitter: "qoomon1",
    },
  ],
  github: "qoomon/zjump",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "fzf", "jump", "cd", "terminal", "console", "shell"],
  installation: {
    origin: "github",
    sourceFiles: ["zjump.plugin.zsh"],
  },
};

export default plugin;
