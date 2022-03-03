const plugin: Fig.Plugin = {
  name: "fzf-it",
  type: "shell",
  description: "Make any command interactive wrapping it with FZF functionality",
  github: "micakce/fzf-it",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
