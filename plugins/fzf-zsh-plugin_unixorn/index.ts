const plugin: Fig.Plugin = {
  name: "fzf-zsh-plugin_unixorn",
  type: "shell",
  description: "ZSH plugin to enable fzf searches of a lot more stuff - docker, tmux, homebrew and more.",
  authors: [
    {
      name: "unixorn",
      github: "unixorn",
      twitter: "curiousbiped",
    }
  ],
  github: "unixorn/fzf-zsh-plugin",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh-plugin",
    "command-history",
    "hacktoberfest",
    "fzf",
    "fzf-scripts",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-zsh-plugin.plugin.zsh"],
  },
};

export default plugin;
