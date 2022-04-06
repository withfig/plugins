const plugin: Fig.Plugin = {
  icon: "👾",
  name: "Linus-rants-ZSH_bhayward93",
  type: "shell",
  description:
    "Picks a random Linus Torvalds quote to display every time you load your shell",
  authors: [
    {
      name: "bhayward93",
      github: "bhayward93",
    },
  ],
  github: "bhayward93/Linus-rants-ZSH",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["linus-rants.plugin.zsh"],
  },
};

export default plugin;
