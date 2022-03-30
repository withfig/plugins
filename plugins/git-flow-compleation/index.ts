const plugin: Fig.Plugin = {
  name: "git-flow-completion",
  type: "shell",
  description: "Bash, Zsh and fish completion support for git-flow.",
  authors: [
    {
      name: "bobthecow",
      github: "bobthecow",
    },
  ],
  github: "bobthecow/git-flow-completion",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["git-flow-completion.bash"],
    },
    zsh: {
      sourceFiles: ["git-flow-completion.plugin.zsh"],
    },
  },
};

export default plugin;
