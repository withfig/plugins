const plugin: Fig.Plugin = {
  name: "code-review",
  type: "shell",
  description: "zsh code review plugin",
  github: "xorkevin/code-review-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
