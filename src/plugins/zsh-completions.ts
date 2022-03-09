const plugin: Fig.Plugin = {
  name: "zsh-completions",
  type: "shell",
  description: "Additional completion definitions for Zsh.",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    },
  ],
  github: "zsh-users/zsh-completions",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: ["zsh", "zsh-completions", "shell", "completion"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-completions.plugin.zsh"],
  },
};

export default plugin;
