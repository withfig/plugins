const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "lambda-zsh-theme_cdimascio",
  type: "shell",
  description: "λ Beautiful lambda theme for Zsh",
  authors: [
    {
      name: "cdimascio",
      github: "cdimascio",
      twitter: "carminedimascio",
    },
  ],
  github: "cdimascio/lambda-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "zsh", "lambda"],
  installation: {
    origin: "github",
    sourceFiles: ["cdimascio-lambda.zsh-theme"],
  },
};

export default plugin;
