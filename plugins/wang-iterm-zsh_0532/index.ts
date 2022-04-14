const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "wang-iterm-zsh_0532",
  displayName: "Wang iTerm Zsh",
  type: "shell",
  description: "The theme and colors for Oh My ZSH and iTerm",
  authors: [
    {
      name: "0532",
      github: "0532",
    },
  ],
  github: "0532/wang-iterm-zsh",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["wang.zsh-theme"],
  },
};

export default plugin;
