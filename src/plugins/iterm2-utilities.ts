const plugin: Fig.Plugin = {
  name: "iterm2-utilities",
  type: "shell",
  description: "Lightweight ZSH plugin (Zinit) to sync iTerm2 utilities",
  github: "decayofmind/zsh-iterm2-utilities",
  shells: ["zsh"],
  tags: [
    "zsh",
    "sync",
    "iterm2",
    "proxy",
    "zplugin",
    "zinit",
    "iterm2-utilities",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
