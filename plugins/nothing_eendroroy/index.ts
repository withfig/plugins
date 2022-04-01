const plugin: Fig.Plugin = {
  name: "nothing_eendroroy",
  type: "shell",
  description: "Nothing ZSH theme",
  authors: [
    {
      name: "eendroroy",
      github: "eendroroy",
      twitter: "eendroroy",
    }
  ],
  github: "eendroroy/nothing",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["nothing.plugin.zsh"],
  },
};

export default plugin;
