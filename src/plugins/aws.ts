const plugin: Fig.Plugin = {
  name: "aws",
  type: "shell",
  description: "ZSH AWS Plugin",
  github: "apachler/zsh-aws",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
