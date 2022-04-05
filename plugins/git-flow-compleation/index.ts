const plugin: Fig.Plugin = {
  name: "git-flow-completion",
  description: "Bash, Zsh and fish completion support for git-flow.",
  type: "shell",
  authors: [
    {
      name: "bobthecow",
      github: "bobthecow",
    },
  ],
  github: "bobthecow/git-flow-completion",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["git-flow-completion.bash"],
    },
    zsh: {
      sourceFiles: ["git-flow-completion.plugin.zsh"],
    },
    fish: {
      sourceFiles: ["git.fish"],
    },
  },
};

export default plugin;
