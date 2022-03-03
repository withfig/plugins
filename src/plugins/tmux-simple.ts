const plugin: Fig.Plugin = {
  name: "tmux-simple",
  type: "shell",
  description: "Simple plugin for using tmux with zsh",
  github: "TBSliver/zsh-plugin-tmux-simple",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
