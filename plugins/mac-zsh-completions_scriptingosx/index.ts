const plugin: Fig.Plugin = {
  name: "mac-zsh-completions_scriptingosx",
  type: "shell",
  description: "macOS specific additional completion definitions for Zsh.",
  authors: [
    {
      name: "scriptingosx",
      github: "scriptingosx",
    }
  ],
  github: "scriptingosx/mac-zsh-completions",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh",
    "zsh-completions",
    "zsh-completion",
    "macos",
    "mac",
    "terminal",
    "macadmin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["mac-zsh-completions.plugin.zsh"],
  },
};

export default plugin;
