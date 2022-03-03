const plugin: Fig.Plugin = {
  name: "travis",
  type: "shell",
  description: "ZSH plugin to open Travis CI page for the current repo",
  github: "denolfe/zsh-travis",
  shells: ["zsh"],
  tags: [
    "zsh",
    "travis",
    "zsh-plugins",
    "zsh-travis",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
