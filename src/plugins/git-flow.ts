const plugin: Fig.Plugin = {
  name: "git-flow",
  type: "shell",
  description: "Bash, Zsh and fish completion support for git-flow.",
  github: "bobthecow/git-flow-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
