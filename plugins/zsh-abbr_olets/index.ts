const plugin: Fig.Plugin = {
  name: "zsh-abbr_olets",
  type: "shell",
  description: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
  authors: [
    {
      name: "olets",
      github: "olets",
      twitter: "oletsdev",
    },
  ],
  github: "olets/zsh-abbr",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "abbreviations", "shell", "command-line", "cli"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-abbr.plugin.zsh"],
  },
};

export default plugin;
