const plugin: Fig.Plugin = {
  name: "snippets",
  type: "shell",
  description: "Snippet expansion for zsh",
  github: "willghatch/zsh-snippets",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
