const plugin: Fig.Plugin = {
  name: "zsh-theme_igor9silva",
  type: "shell",
  description: "Minimalist theme for oh-my-zsh.",
  authors: [
    {
      name: "igor9silva",
      github: "igor9silva",
    },
  ],
  github: "igor9silva/zsh-theme",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["igorsilva.zsh-theme"],
  },
};

export default plugin;
