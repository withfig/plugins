const plugin: Fig.Plugin = {
  name: "antigen-git-rebase_smallhadroncollider",
  type: "shell",
  description: "An Antigen/zsh script to help with rebasing",
  authors: [
    {
      name: "smallhadroncollider",
      github: "smallhadroncollider",
    }
  ],
  github: "smallhadroncollider/antigen-git-rebase",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["git-rebase.zsh"],
  },
};

export default plugin;
