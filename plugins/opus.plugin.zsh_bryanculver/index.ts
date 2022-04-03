const plugin: Fig.Plugin = {
  name: "opus.plugin.zsh_bryanculver",
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
