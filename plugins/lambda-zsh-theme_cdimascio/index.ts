const plugin: Fig.Plugin = {
  icon: "λ",
  name: "lambda-zsh-theme_cdimascio",
  displayName: "Lambda Zsh Theme",
  screenshots: [
    "https://raw.githubusercontent.com/cdimascio/lambda-zsh-theme/master/assets/example.png",
  ],
  type: "shell",
  description: "Beautiful lambda theme for Zsh",
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
