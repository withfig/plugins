const plugin: Fig.Plugin = {
  name: "zsh-command-not-found_Tarrasch",
  type: "shell",
  description:
    "A mirror of oh-my-zsh/plugins/command-not-found in case you don't want all of oh-my-zsh",
  authors: [
    {
      name: "Tarrasch",
      github: "Tarrasch",
    },
  ],
  github: "Tarrasch/zsh-command-not-found",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["command-not-found.plugin.zsh"],
  },
};

export default plugin;
