const plugin: Fig.Plugin = {
  name: "antibody-completion",
  type: "shell",
  description: "zsh plugin: this plugin provides completion for Antibody plugin manager.",
  github: "sinetoami/antibody-completion",
  shells: ["zsh"],
  tags: [
    "zsh",
    "completion",
    "antibody",
    "zsh-completions",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
