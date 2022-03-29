const plugin: Fig.Plugin = {
  name: "zsh-opt-path_jreese",
  type: "shell",
  description: "Automatically add ~/opt/*/bin to $PATH",
  authors: [
    {
      name: "jreese",
      github: "jreese",
      twitter: "n7cmdr",
    }
  ],
  github: "jreese/zsh-opt-path",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "paths",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["opt-path.plugin.zsh"],
  },
};

export default plugin;
