const plugin: Fig.Plugin = {
  name: "auto-fu.zsh_hchbaw",
  displayName: "Auto Fu",
  description: "Zsh automatic complete-word and list-choices",
  icon: "🥷",
  type: "shell",
  authors: [
    {
      name: "hchbaw",
      github: "hchbaw",
    },
  ],
  github: "hchbaw/auto-fu.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["auto-fu.zsh"],
  },
};

export default plugin;
