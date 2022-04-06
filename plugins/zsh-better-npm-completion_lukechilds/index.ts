const plugin: Fig.Plugin = {
  icon: "😀",
  name: "zsh-better-npm-completion_lukechilds",
  displayName: "ZSH Completions",
  type: "shell",
  description: "Better completion for npm",
  screenshots: [
    "https://github.com/lukechilds/zsh-better-npm-completion/raw/master/demo.gif",
  ],
  authors: [
    {
      name: "lukechilds",
      github: "lukechilds",
      twitter: "lukechilds",
    },
  ],
  github: "lukechilds/zsh-better-npm-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["zsh", "zsh-plugin", "npm", "completion"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-better-npm-completion.plugin.zsh"],
  },
};

export default plugin;
