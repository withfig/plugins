const plugin: Fig.Plugin = {
  name: "zfzf",
  type: "shell",
  description: "zfzf is a fzf-based file picker for zsh which allows you to quickly navigate the directory hierarchy",
  github: "b0o/zfzf",
  shells: ["zsh"],
  tags: [
    "linux",
    "shell",
    "zsh",
    "terminal",
    "fzf",
    "zsh-plugin",
    "file-picker",
    "directory-traversal",
    "term",
    "zsh-functions",
    "fzf-scripts",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
