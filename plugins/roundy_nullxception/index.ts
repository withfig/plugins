const plugin: Fig.Plugin = {
  name: "roundy_nullxception",
  type: "shell",
  description: "fast, cute, and-of-course, roundy prompt-theme for Zsh",
  authors: [
    {
      name: "nullxception",
      github: "nullxception",
      twitter: "nullxception",
    }
  ],
  github: "nullxception/roundy",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh-theme",
    "zsh-prompt",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["roundy.plugin.zsh"],
  },
};

export default plugin;
