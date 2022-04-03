const plugin: Fig.Plugin = {
  name: "git_davidde",
  type: "shell",
  description: "Custom oh-my-zsh git plugin",
  authors: [
    {
      name: "davidde",
      github: "davidde",
    },
  ],
  github: "davidde/git",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["git", "zsh", "oh-my-zsh", "shell", "terminal", "productivity"],
  installation: {
    origin: "github",
    sourceFiles: ["git.plugin.zsh"],
  },
};

export default plugin;
