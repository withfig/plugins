const plugin: Fig.Plugin = {
  name: "virtualenv-prompt",
  type: "shell",
  description: "Yet another virtualenv prompt plugin of oh-my-zsh.",
  github: "tonyseek/oh-my-zsh-virtualenv-prompt",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
