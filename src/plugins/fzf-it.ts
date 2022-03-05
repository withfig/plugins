const plugin: Fig.Plugin = {
  name: "fzf-it",
  type: "shell",
  description: "Make any command interactive wrapping it with FZF functionality",
  github: "micakce/fzf-it",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
