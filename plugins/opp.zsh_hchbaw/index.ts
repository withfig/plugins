const plugin: Fig.Plugin = {
  name: "opp.zsh_hchbaw",
  type: "shell",
  description: "# Vim's text-objects-ish for zsh (obsolete for zsh-5.0.8)",
  authors: [
    {
      name: "hchbaw",
      github: "hchbaw",
    },
  ],
  github: "hchbaw/opp.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["opp.plugin.zsh"],
  },
};

export default plugin;
