const plugin: Fig.Plugin = {
  name: "tmux-multisession",
  type: "shell",
  description: "The tmux plugin from oh-my-zsh is neat, pity it doesn't support multiple sessions on a single server process...",
  github: "nichus/zsh-tmux-multisession",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
