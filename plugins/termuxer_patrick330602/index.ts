const plugin: Fig.Plugin = {
  name: "termuxer_patrick330602",
  type: "shell",
  description: "A oh-my-zsh theme for termux",
  authors: [
    {
      name: "patrick330602",
      github: "patrick330602",
      twitter: "callmepkwu",
    },
  ],
  github: "patrick330602/termuxer",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["termuxer.zsh-theme"],
  },
};

export default plugin;
