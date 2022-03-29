const plugin: Fig.Plugin = {
  name: "lambda-gitster_ergenekonyigit",
  type: "shell",
  description: "oh-my-zsh theme",
  authors: [
    {
      name: "ergenekonyigit",
      github: "ergenekonyigit",
      twitter: "ergenekonyigit",
    }
  ],
  github: "ergenekonyigit/lambda-gitster",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "oh-my-zsh",
    "theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["lambda-gitster.zsh-theme"],
  },
};

export default plugin;
