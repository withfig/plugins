const plugin: Fig.Plugin = {
  name: "pure",
  type: "shell",
  description: "Pretty, minimal and fast ZSH prompt",
  github: "sindresorhus/pure",
  authors: [
    {
      name: "Sindre Sorhus",
      twitter: "sindresorhus",
      github: "sindresorhus",
    },
  ],
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["zsh", "theme"],
  installation: {
    source: "github",
    use: ["async.zsh", "pure.zsh"],
  },
};

export default plugin;
