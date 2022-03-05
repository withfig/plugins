const plugin: Fig.Plugin = {
  name: "code-review",
  type: "shell",
  description: "zsh code review plugin",
  github: "xorkevin/code-review-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
