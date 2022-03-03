const plugin: Fig.Plugin = {
  name: "laravelx",
  type: "shell",
  description: "A simple and elegant Laravel plugin for Oh My Zsh.",
  github: "rsthegeek/oh-my-zsh-laravelx",
  shells: ["zsh"],
  tags: [
    "zsh",
    "laravel",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
