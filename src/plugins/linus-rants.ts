const plugin: Fig.Plugin = {
  name: "linus-rants",
  type: "shell",
  description: "Picks a random Linus Torvalds quote to display every time you load your shell",
  github: "bhayward93/Linus-rants-ZSH",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
