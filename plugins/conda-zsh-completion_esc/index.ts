const plugin: Fig.Plugin = {
  name: "conda-zsh-completion_esc",
  type: "shell",
  description: "zsh completion for conda",
  authors: [
    {
      name: "esc",
      github: "esc",
      twitter: "esc___",
    },
  ],
  github: "esc/conda-zsh-completion",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["conda-zsh-completion.plugin.zsh"],
  },
};

export default plugin;
