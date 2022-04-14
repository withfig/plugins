const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "cdbk_MikeDacre",
  displayName: "Cdbk",
  type: "shell",
  description:
    "A ZSH plugin to allow easy named directory creation - shortcuts to any directory you want",
  authors: [
    {
      name: "MikeDacre",
      github: "MikeDacre",
    },
  ],
  github: "MikeDacre/cdbk",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["cdbk.plugin.zsh"],
  },
};

export default plugin;
