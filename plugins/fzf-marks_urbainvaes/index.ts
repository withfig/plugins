const plugin: Fig.Plugin = {
  name: "fzf-marks_urbainvaes",
  type: "shell",
  description: "Plugin to manage bookmarks in bash and zsh",
  authors: [
    {
      name: "urbainvaes",
      github: "urbainvaes",
    },
  ],
  github: "urbainvaes/fzf-marks",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["fzf", "zsh-plugin", "shell-script", "bookmarks"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["fzf-marks.plugin.bash"],
    },
    zsh: {
      sourceFiles: ["fzf-marks.plugin.zsh"],
    },
  },
};

export default plugin;
