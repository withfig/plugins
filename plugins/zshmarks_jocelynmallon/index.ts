const plugin: Fig.Plugin = {
  icon: "🔖",
  name: "zshmarks_jocelynmallon",
  displayName: "zshmarks",
  type: "shell",
  description:
    "A port of Bashmarks (simple bookmarking plugin by Todd Werth) for oh-my-zsh",
  authors: [
    {
      name: "jocelynmallon",
      github: "jocelynmallon",
    },
  ],
  github: "jocelynmallon/zshmarks",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zshmarks.plugin.zsh"],
  },
};

export default plugin;
