const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "remiii.zsh-theme_Remiii",
  displayName: "Remiii",
  type: "shell",
  description: "remiii.zsh-theme",
  authors: [
    {
      name: "Remiii",
      github: "Remiii",
      twitter: "Remiii_",
    },
  ],
  github: "Remiii/remiii.zsh-theme",
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme", "remiii", "solarized"],
  installation: {
    origin: "github",
    sourceFiles: ["remiii.zsh-theme"],
  },
};

export default plugin;
