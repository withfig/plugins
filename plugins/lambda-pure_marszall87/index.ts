const plugin: Fig.Plugin = {
  name: "lambda-pure_marszall87",
  displayName: "Lambda Pure",
  type: "shell",
  description: "Pretty, minimal and fast ZSH prompt based on Pure",
  authors: [
    {
      name: "marszall87",
      github: "marszall87",
    },
  ],
  github: "marszall87/lambda-pure",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "prompt",
    "theme",
    "git",
    "nodejs",
    "lambda",
    "terminal",
    "shell-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["lambda-pure.plugin.zsh"],
  },
};

export default plugin;
