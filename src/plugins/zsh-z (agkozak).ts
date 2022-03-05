const plugin: Fig.Plugin = {
  name: "zsh-z (agkozak)",
  type: "shell",
  description:
    'Jump quickly to directories that you have visited "frecently." A native Zsh port of z.sh.',
  github: "agkozak/zsh-z",
  shells: ["zsh"],
  tags: ["zsh", "filesystem", "command-line-tool", "zsh-plugin", "autojump"],
  installation: {
    origin: "github",
  },
};

export default plugin;
