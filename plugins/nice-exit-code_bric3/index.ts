const plugin: Fig.Plugin = {
  icon: "💡",
  name: "nice-exit-code_bric3",
  displayName: "Nice Exit Code",
  type: "shell",
  description: "ZSH plugin that maps exit status code to human readable string",
  authors: [
    {
      name: "bric3",
      github: "bric3",
      twitter: "BriceDutheil",
    },
  ],
  github: "bric3/nice-exit-code",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["nice-exit-code.plugin.zsh"],
  },
};

export default plugin;
