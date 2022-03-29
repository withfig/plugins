const plugin: Fig.Plugin = {
  name: "lambda-mod-zsh-theme_halfo",
  type: "shell",
  description: "A simple zsh theme.",
  authors: [
    {
      name: "halfo",
      github: "halfo",
    }
  ],
  github: "halfo/lambda-mod-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh-theme",
    "oh-my-zsh-theme",
    "minimalistic",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["lambda-mod.zsh-theme"],
  },
};

export default plugin;
