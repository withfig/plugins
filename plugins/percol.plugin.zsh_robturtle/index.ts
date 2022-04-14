const plugin: Fig.Plugin = {
  icon: "🔥",
  name: "percol.plugin.zsh_robturtle",
  displayName: "Percol Plugin",
  type: "shell",
  description:
    "Allows interactively incrementally search history/checkout git branches and other stuff",
  authors: [
    {
      name: "robturtle",
      github: "robturtle",
      twitter: "yl3710",
    },
  ],
  github: "robturtle/percol.plugin.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["percol.plugin.zsh"],
  },
};

export default plugin;
