const plugin: Fig.Plugin = {
  name: "nt9-oh-my-zsh-theme_lenguyenthanh",
  type: "shell",
  description: "A clean, distraction free and git focused development theme for Oh-my-zsh",
  authors: [
    {
      name: "lenguyenthanh",
      github: "lenguyenthanh",
    }
  ],
  github: "lenguyenthanh/nt9-oh-my-zsh-theme",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "theme",
    "zsh-theme",
    "oh-my-zsh-theme",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["nt9.zsh-theme"],
  },
};

export default plugin;
