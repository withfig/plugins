const plugin: Fig.Plugin = {
  icon: "😎",
  name: "tmux_zpm-zsh",
  displayName: "Tmux (zpm)",
  type: "shell",
  description: "zsh plugin for tmux",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/tmux",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["tmux.plugin.zsh"],
  },
};

export default plugin;
