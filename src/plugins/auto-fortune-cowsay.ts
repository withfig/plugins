const plugin: Fig.Plugin = {
  name: "auto-fortune-cowsay",
  type: "shell",
  description: "Prints out an ASCII picture of a cow saying a random epigram on every zsh start.",
  github: "babasbot/auto-fortune-cowsay-zsh",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
