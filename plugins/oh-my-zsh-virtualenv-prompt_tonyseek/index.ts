const plugin: Fig.Plugin = {
  icon: "💾",
  name: "oh-my-zsh-virtualenv-prompt_tonyseek",
  displayName: "Oh My Zsh Virtualenv Prompt",
  type: "shell",
  description: "Yet another virtualenv prompt plugin of oh-my-zsh.",
  authors: [
    {
      name: "tonyseek",
      github: "tonyseek",
    },
  ],
  github: "tonyseek/oh-my-zsh-virtualenv-prompt",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["virtualenv-prompt.plugin.zsh"],
  },
};

export default plugin;
