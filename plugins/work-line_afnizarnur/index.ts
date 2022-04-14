const plugin: Fig.Plugin = {
  icon: "👾",
  name: "work-line_afnizarnur",
  displayName: "Work Line",
  type: "shell",
  description: "An oh-my-zsh shell theme with nice emojis to use at work ⚡️",
  authors: [
    {
      name: "afnizarnur",
      github: "afnizarnur",
      twitter: "afnizarnur",
    },
  ],
  github: "afnizarnur/work-line",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["oh-my-zsh", "zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["work-line.zsh-theme"],
  },
};

export default plugin;
