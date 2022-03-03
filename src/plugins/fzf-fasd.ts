const plugin: Fig.Plugin = {
  name: "fzf-fasd",
  type: "shell",
  description: "🌸 fzf + fasd integration",
  github: "wookayin/fzf-fasd",
  shells: ["zsh"],
  tags: [
    "zsh",
    "fzf",
    "fasd",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
