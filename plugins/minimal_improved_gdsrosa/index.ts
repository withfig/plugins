const plugin: Fig.Plugin = {
  name: "minimal_improved_gdsrosa",
  type: "shell",
  description: "This repository is a theme(Minimal Improved) for Oh-my-zsh",
  authors: [
    {
      name: "gdsrosa",
      github: "gdsrosa",
      twitter: "gabrieldsrosa",
    },
  ],
  github: "gdsrosa/minimal_improved",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["minimal_improved.zsh-theme"],
  },
};

export default plugin;
