const plugin: Fig.Plugin = {
  name: "tsm_RobertAudi",
  type: "shell",
  description: "Tmux Session Manager",
  authors: [
    {
      name: "RobertAudi",
      github: "RobertAudi",
    },
  ],
  github: "RobertAudi/tsm",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["tmux", "zsh"],
  installation: {
    origin: "github",
    sourceFiles: ["tsm.plugin.zsh"],
  },
};

export default plugin;
