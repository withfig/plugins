const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zsh-extract_le0me55i",
  type: "shell",
  description: "Plugin for Zshell that extracts the archive file you pass it",
  authors: [
    {
      name: "le0me55i",
      github: "le0me55i",
    },
  ],
  github: "le0me55i/zsh-extract",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["extract.plugin.zsh"],
  },
};

export default plugin;
