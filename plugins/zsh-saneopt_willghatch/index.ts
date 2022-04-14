const plugin: Fig.Plugin = {
  icon: "💥",
  name: "zsh-saneopt_willghatch",
  displayName: "Zsh Saneopt",
  type: "shell",
  description: "Sane options for zsh, in the spirit of vim-sensible.",
  authors: [
    {
      name: "willghatch",
      github: "willghatch",
    },
  ],
  github: "willghatch/zsh-saneopt",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["saneopt.plugin.zsh"],
  },
};

export default plugin;
