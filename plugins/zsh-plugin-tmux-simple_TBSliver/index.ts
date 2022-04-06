const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "zsh-plugin-tmux-simple_TBSliver",
  type: "shell",
  description: "Simple plugin for using tmux with zsh",
  authors: [
    {
      name: "TBSliver",
      github: "TBSliver",
    },
  ],
  github: "TBSliver/zsh-plugin-tmux-simple",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["tmux-simple.plugin.zsh"],
  },
};

export default plugin;
