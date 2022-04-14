const plugin: Fig.Plugin = {
  icon: "💡",
  name: "nothing_eendroroy",
  displayName: "Nothing (eendroroy)",
  type: "shell",
  description: "Nothing ZSH theme",
  authors: [
    {
      name: "eendroroy",
      github: "eendroroy",
      twitter: "eendroroy",
    },
  ],
  github: "eendroroy/nothing",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh-theme"],
  installation: {
    origin: "github",
    sourceFiles: ["nothing.plugin.zsh"],
  },
};

export default plugin;
