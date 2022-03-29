const plugin: Fig.Plugin = {
  name: "zsh-iterm2-utilities_decayofmind",
  type: "shell",
  description: "Lightweight ZSH plugin (Zinit) to sync iTerm2 utilities",
  authors: [
    {
      name: "decayofmind",
      github: "decayofmind",
    }
  ],
  github: "decayofmind/zsh-iterm2-utilities",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zplugin",
    "iterm2",
    "proxy",
    "sync",
    "zinit",
    "iterm2-utilities",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["iterm2-utils.plugin.zsh"],
  },
};

export default plugin;
