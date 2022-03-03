const plugin: Fig.Plugin = {
  name: "aws",
  type: "shell",
  description: "ZSH AWS Plugin",
  github: "apachler/zsh-aws",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
