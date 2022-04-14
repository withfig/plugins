const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh2000_consolemaverick",
  displayName: "Zsh2000",
  type: "shell",
  description: "Pretty sweet zsh theme",
  authors: [
    {
      name: "consolemaverick",
      github: "consolemaverick",
      twitter: "consolemaverick",
    },
  ],
  github: "consolemaverick/zsh2000",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh2000.zsh-theme"],
  },
};

export default plugin;
