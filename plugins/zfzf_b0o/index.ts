const plugin: Fig.Plugin = {
  name: "zfzf_b0o",
  type: "shell",
  description: "zfzf is a fzf-based file picker for zsh which allows you to quickly navigate the directory hierarchy",
  authors: [
    {
      name: "b0o",
      github: "b0o",
      twitter: "HellsMaddy",
    }
  ],
  github: "b0o/zfzf",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "zsh-functions",
    "shell",
    "terminal",
    "term",
    "linux",
    "fzf",
    "fzf-scripts",
    "file-picker",
    "directory-traversal",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zfzf.plugin.zsh"],
  },
};

export default plugin;
