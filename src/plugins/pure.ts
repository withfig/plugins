const plugin: Fig.Plugin = {
  name: "pure",
  type: "shell",
  description: "Pretty, minimal and fast ZSH prompt",
  github: "sindresorhus/pure",
  authors: [
    {
      name: "Sindre Sorhus",
      twitter: "sindresorhus",
      github: "sindresorhus",
    },
  ],
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["zsh", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["async.zsh", "pure.zsh"],
  },
  configuration: [
    {
      displayName: "Prompt Symbol",
      description: "The symbol to use for the prompt",
      default: "❯",
      type: "string",
      enviromentVariable: "PURE_PROMPT_SYMBOL"
    },
    {
      displayName: "VI-Mode Prompt Symbol",
      description: "The symbol to use for the prompt when in vi-mode",
      default: "❮",
      type: "string",
      enviromentVariable: "PURE_PROMPT_VICMD_SYMBOL"
    },
    {
      displayName: "Git Down Arrow Symbol",
      description: "The symbol to use for the git down arrow",
      default: "⇣",
      type: "string",
      enviromentVariable: "PURE_GIT_DOWN_ARROW"
    },
    {
      displayName: "Git Up Arrow Symbol",
      description: "The symbol to use for the git up arrow",
      default: "⇡",
      type: "string",
      enviromentVariable: "PURE_GIT_UP_ARROW"
    },
    {
      displayName: "Git Stash Symbol",
      description: "The symbol to use for the git stash symbol",
      default: "≡",
      type: "string",
      enviromentVariable: "PURE_GIT_STASH_SYMBOL"
    }
  ],
};

export default plugin;
