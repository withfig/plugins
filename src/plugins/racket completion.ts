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
    source: "github",
  },
};

export default plugin;
