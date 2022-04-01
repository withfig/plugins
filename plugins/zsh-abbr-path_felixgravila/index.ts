const plugin: Fig.Plugin = {
  name: "zsh-abbr-path_felixgravila",
  type: "shell",
  description: "theme_title_use_abbreviated_path equivalent for zsh on osx",
  authors: [
    {
      name: "felixgravila",
      github: "felixgravila",
    }
  ],
  github: "felixgravila/zsh-abbr-path",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zshrc",
    "oh-my-zsh",
    "oh-my-fish",
    "agnoster-theme",
    "agnoster",
    "macos",
    "macosx",
    "osx",
    "terminal",
    "iterm2",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["agnoster-felix.zsh-theme"],
  },
};

export default plugin;
