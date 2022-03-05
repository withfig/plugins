const plugin: Fig.Plugin = {
  name: "quickjump",
  type: "shell",
  description: "A zsh plugin adding tab completion to quickly navigate to recent files and directories",
  github: "fikovnik/zsh-quickjump",
  shells: ["zsh"],
  tags: [
    "zsh",
    "fzf",
    "zsh-plugin",
    "autojump",
    "fasd",
    "zsh-quickjump",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
