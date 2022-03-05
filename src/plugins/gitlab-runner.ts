const plugin: Fig.Plugin = {
  name: "gitlab-runner",
  type: "shell",
  description: "null",
  github: "pseyfert/zsh-gitlab-runner-completion",
  shells: ["zsh"],
  tags: [
    "zsh-completions",
    "zsh-completion",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
