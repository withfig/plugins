const plugin: Fig.Plugin = {
  name: "zsh-better-npm-completion_lukechilds",
  type: "shell",
  description: "Better completion for npm",
  authors: [
    {
      name: "lukechilds",
      github: "lukechilds",
      twitter: "lukechilds",
    }
  ],
  github: "lukechilds/zsh-better-npm-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "npm",
    "completion",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-better-npm-completion.plugin.zsh"],
  },
};

export default plugin;
