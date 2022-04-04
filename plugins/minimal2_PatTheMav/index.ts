const plugin: Fig.Plugin = {
  name: "minimal2_PatTheMav",
  type: "shell",
  description: "Adaption of subnixr's minimal zsh theme for zimfw",
  authors: [
    {
      name: "PatTheMav",
      github: "PatTheMav",
      twitter: "patthemav",
    },
  ],
  github: "PatTheMav/minimal2",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "zsh-theme", "zim", "zimfw"],
  installation: {
    origin: "github",
    sourceFiles: ["minimal2.zsh-theme"],
  },
};

export default plugin;
