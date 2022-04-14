const plugin: Fig.Plugin = {
  icon: "💡",
  name: "careful_rm_MikeDacre",
  displayName: "Careful rm",
  type: "shell",
  description:
    "A safe wrapper for rm that adds useful warnings and an optional recycle/trash mode",
  authors: [
    {
      name: "MikeDacre",
      github: "MikeDacre",
    },
  ],
  github: "MikeDacre/careful_rm",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "coreutils",
    "rm",
    "bash",
    "shell",
    "wrapper",
    "trash-mode",
    "macos",
    "macosx",
    "linux",
    "command-line",
    "oh-my-zsh",
    "antigen",
    "alternative",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["careful_rm.alias.sh"],
    },
    zsh: {
      sourceFiles: ["careful_rm.plugin.zsh"],
    },
  },
};

export default plugin;
