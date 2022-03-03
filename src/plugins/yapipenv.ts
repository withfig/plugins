const plugin: Fig.Plugin = {
  name: "yapipenv",
  type: "shell",
  description: "Yet another pipenv plugin for zshell.",
  github: "jerbob/yapipenv.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "pipenv",
    "zplugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
