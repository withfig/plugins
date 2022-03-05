const plugin: Fig.Plugin = {
  name: "zshmarks",
  type: "shell",
  description: "A port of Bashmarks (simple bookmarking plugin by Todd Werth) for oh-my-zsh",
  github: "jocelynmallon/zshmarks",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
