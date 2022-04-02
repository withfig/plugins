const plugin: Fig.Plugin = {
  name: "zsh-z_agkozak",
  displayName: "zsh-z",
  type: "shell",
  description:
    'Jump quickly to directories that you have visited "frecently." A native Zsh port of z.sh.',
  authors: [
    {
      name: "agkozak",
      github: "agkozak",
      twitter: "agkozak",
    },
  ],
  github: "agkozak/zsh-z",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "autojump",
    "zsh",
    "zsh-plugin",
    "filesystem",
    "command-line-tool",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-z.plugin.zsh"],
  },
};

export default plugin;
