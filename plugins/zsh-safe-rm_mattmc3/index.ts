const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "zsh-safe-rm_mattmc3",
  displayName: "Zsh Safe rm",
  type: "shell",
  description:
    "ZSH Plugin to add safe-rm functionality so that `rm` will put files in the trash.",
  authors: [
    {
      name: "mattmc3",
      github: "mattmc3",
    },
  ],
  github: "mattmc3/zsh-safe-rm",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-safe-rm.plugin.zsh"],
  },
};

export default plugin;
