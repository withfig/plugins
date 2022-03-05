const plugin: Fig.Plugin = {
  name: "racket completion",
  type: "shell",
  description: "null",
  github: "racket/shell-completion",
  shells: ["zsh"],
  tags: [
    "racket",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
