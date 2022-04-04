const plugin: Fig.Plugin = {
  name: "slimline_mengelbrecht",
  type: "shell",
  description: "Minimal, customizable, fast and elegant ZSH prompt",
  authors: [
    {
      name: "mengelbrecht",
      github: "mengelbrecht",
    },
  ],
  github: "mengelbrecht/slimline",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "minimal",
    "customizable",
    "zsh",
    "prompt",
    "theme",
    "async",
    "git",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["slimline.plugin.zsh"],
  },
};

export default plugin;
