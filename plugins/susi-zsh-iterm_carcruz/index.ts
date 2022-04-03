const plugin: Fig.Plugin = {
  name: "susi-zsh-iterm_carcruz",
  type: "shell",
  description: "A theme and colors for Oh My ZSH and iTerm",
  authors: [
    {
      name: "carcruz",
      github: "carcruz",
      twitter: "_crcruz",
    },
  ],
  github: "carcruz/susi-zsh-iterm",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["oh-my-zsh-theme", "oh-my-zsh", "bash"],
  installation: {
    origin: "github",
    sourceFiles: ["susi.zsh-theme"],
  },
};

export default plugin;
