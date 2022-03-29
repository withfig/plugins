const plugin: Fig.Plugin = {
  name: "rbenv.plugin.zsh_ELLIOTTCABLE",
  type: "shell",
  description: "A faster fork of rbenv.plugin.zsh",
  authors: [
    {
      name: "ELLIOTTCABLE",
      github: "ELLIOTTCABLE",
    }
  ],
  github: "ELLIOTTCABLE/rbenv.plugin.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "ruby",
    "rbenv",
    "zsh-plugin",
    "fork",
    "fast",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["rbenv.plugin.zsh"],
  },
};

export default plugin;
