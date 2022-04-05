const plugin: Fig.Plugin = {
  icon: "😎",
  name: "oh-my-git",
  type: "shell",
  description: "An opinionated git prompt for bash and zsh",
  authors: [
    {
      name: "arialdomartini",
      github: "arialdomartini",
      twitter: "arialdomartini",
    },
  ],
  github: "arialdomartini/oh-my-git",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["prompt.sh"],
  },
};

export default plugin;
