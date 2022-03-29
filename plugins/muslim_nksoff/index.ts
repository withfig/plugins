const plugin: Fig.Plugin = {
  name: "muslim_nksoff",
  type: "shell",
  description: "zsh prompt theme called muslim",
  authors: [
    {
      name: "nksoff",
      github: "nksoff",
    }
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
