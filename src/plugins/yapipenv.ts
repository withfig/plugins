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
    origin: "github",
  },
};

export default plugin;
