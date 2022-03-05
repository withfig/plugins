const plugin: Fig.Plugin = {
  name: "per-directory-history",
  type: "shell",
  description: "Per directory history for zsh, as well as global history, and the ability to toggle between them with ^G.",
  github: "jimhester/per-directory-history",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
