const plugin: Fig.Plugin = {
  name: "autopair",
  type: "shell",
  description: "Auto-close and delete matching delimiters in zsh",
  github: "hlissner/zsh-autopair",
  shells: ["zsh"],
  tags: [
    "zsh",
    "delimiters",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
