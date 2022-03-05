const plugin: Fig.Plugin = {
  name: "apparix",
  type: "shell",
  description: "Command line directory bookmarks with jumping to bookmarks, subdirectory tab completion, distant listing etc",
  github: "micans/apparix",
  shells: ["zsh"],
  tags: [
    "bash",
    "zsh",
    "command-line",
    "bookmarks",
    "tab-completion",
    "directories",
    "directory-bookmarks",
    "directory-bookmarking",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
