const plugin: Fig.Plugin = {
  name: "zinit_zdharma-continuum",
  type: "shell",
  description: "🌻 Flexible and fast ZSH plugin manager",
  authors: [
    {
      name: "zdharma-continuum",
      github: "zdharma-continuum",
    }
  ],
  github: "zdharma-continuum/zinit",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Framework"],
  keywords: [
    "zsh",
    "zinit",
    "z-shell",
    "plugin-manager",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zinit.zsh"],
  },
};

export default plugin;
