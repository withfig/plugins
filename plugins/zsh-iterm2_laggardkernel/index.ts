const plugin: Fig.Plugin = {
  name: "zsh-iterm2_laggardkernel",
  type: "shell",
  description: "Pack iTerm2 shell integration scripts as a ZSH plugin",
  authors: [
    {
      name: "laggardkernel",
      github: "laggardkernel",
    }
  ],
  github: "laggardkernel/zsh-iterm2",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-iterm2.zsh"],
  },
};

export default plugin;
