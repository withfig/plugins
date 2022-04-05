const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "sobole-zsh-theme_sobolevn",
  type: "shell",
  description: "Minimalistic zsh theme inspired by the old-fashioned hobbies",
  authors: [
    {
      name: "sobolevn",
      github: "sobolevn",
    },
  ],
  github: "sobolevn/sobole-zsh-theme",
  site: "http://sobolevn.me/sobole-zsh-theme/",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "terminal", "terminal-theme", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["sobole.zsh-theme"],
  },
};

export default plugin;
