const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "muslim_nksoff",
  displayName: "Muslim (nksoff)",
  type: "shell",
  description: "zsh prompt theme called muslim",
  authors: [
    {
      name: "nksoff",
      github: "nksoff",
    },
  ],
  github: "nksoff/muslim",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["muslim.zsh-theme"],
  },
};

export default plugin;
