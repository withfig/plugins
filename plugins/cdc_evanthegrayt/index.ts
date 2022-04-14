const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "cdc_evanthegrayt",
  displayName: "Cdc",
  type: "shell",
  description:
    "☣️ Shell plugin for zsh/bash that allows you to cd to subdirectories of user-defined directories from anywhere, without editing CDPATH. ",
  authors: [
    {
      name: "evanthegrayt",
      github: "evanthegrayt",
      twitter: "evanthegrayt",
    },
  ],
  github: "evanthegrayt/cdc",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "bash",
    "plugin",
    "function",
    "productivity",
    "directory",
    "cdc",
    "tab-completion",
    "bash-it",
    "oh-my-zsh",
    "cdpath",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["cdc.plugin.bash"],
    },
    zsh: {
      sourceFiles: ["cdc.plugin.zsh"],
    },
  },
};

export default plugin;
