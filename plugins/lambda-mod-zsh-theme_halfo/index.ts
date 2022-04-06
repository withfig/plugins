const plugin: Fig.Plugin = {
  icon: "👾",
  name: "lambda-mod-zsh-theme_halfo",
  type: "shell",
  description: "A simple zsh theme.",
  authors: [
    {
      name: "halfo",
      github: "halfo",
    },
  ],
  github: "halfo/lambda-mod-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "oh-my-zsh-theme", "minimalistic"],
  installation: {
    origin: "github",
    sourceFiles: ["lambda-mod.zsh-theme"],
  },
  configuration: [
    {
      displayName: "Directory Levels in Prompt",
      type: "environmentVariable",
      name: "LAMBDA_MOD_N_DIR_LEVELS",
      interface: "text",
      default: 3,
    },
  ],
};

export default plugin;
