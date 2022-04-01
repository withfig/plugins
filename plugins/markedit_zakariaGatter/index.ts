const plugin: Fig.Plugin = {
  name: "markedit_zakariaGatter",
  type: "shell",
  description: "very simple BASH ; ZSH Plugin to mark Files and Edit them",
  authors: [
    {
      name: "zakariaGatter",
      github: "zakariaGatter",
    }
  ],
  github: "zakariaGatter/markedit",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "markedit",
    "zsh-plugins",
    "mark-files",
    "zsh",
    "zsh-plugin",
    "oh-my-zsh-plugin",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["markedit.zsh"],
  },
};

export default plugin;
