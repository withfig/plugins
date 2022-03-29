const plugin: Fig.Plugin = {
  name: "igit_ytakahashi",
  type: "shell",
  description: "Interactive git commands using fzf, available as zsh plugin",
  authors: [
    {
      name: "ytakahashi",
      github: "ytakahashi",
    }
  ],
  github: "ytakahashi/igit",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "git",
    "zsh",
    "fzf",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["igit.plugin.zsh"],
  },
};

export default plugin;
