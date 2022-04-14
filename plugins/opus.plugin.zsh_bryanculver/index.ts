const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "opus.plugin.zsh_bryanculver",
  displayName: "Opus Plugin",
  type: "shell",
  description: "Lightly simple utility to jump between projects.",
  authors: [
    {
      name: "bryanculver",
      github: "bryanculver",
      twitter: "bryanculver",
    },
  ],
  github: "bryanculver/opus.plugin.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["opus.plugin.zsh"],
  },
};

export default plugin;
