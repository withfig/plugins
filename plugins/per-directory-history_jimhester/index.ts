const plugin: Fig.Plugin = {
  icon: "📜",
  name: "per-directory-history_jimhester",
  displayName: "Per Directory History",
  type: "shell",
  description:
    "Per directory history for zsh, as well as global history, and the ability to toggle between them with ^G.",
  authors: [
    {
      name: "jimhester",
      github: "jimhester",
      twitter: "jimhester_",
    },
  ],
  github: "jimhester/per-directory-history",
  license: ["Zlib"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["per-directory-history.plugin.zsh"],
  },
};

export default plugin;
