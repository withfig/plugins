const plugin: Fig.Plugin = {
  name: "fzf-marks",
  type: "shell",
  description: "Plugin to manage bookmarks in bash and zsh",
  github: "urbainvaes/fzf-marks",
  shells: ["zsh"],
  tags: [
    "fzf",
    "bookmarks",
    "shell-script",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
