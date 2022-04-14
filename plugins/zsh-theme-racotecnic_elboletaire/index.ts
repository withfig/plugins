const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "zsh-theme-racotecnic_elboletaire",
  displayName: "Zsh Theme Racotecnic",
  type: "shell",
  description: "A ZSH theme based on af-magic and posh-git",
  authors: [
    {
      name: "elboletaire",
      github: "elboletaire",
    },
  ],
  github: "elboletaire/zsh-theme-racotecnic",
  license: ["GPL-3.0"],
  site: "http://www.racotecnic.com/2013/12/tema-de-oh-my-zsh-inspirado-en-af-magic-y-posh-git/",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "theme"],
  installation: {
    origin: "github",
    sourceFiles: ["racotecnic.zsh-theme"],
  },
};

export default plugin;
