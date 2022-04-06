const plugin: Fig.Plugin = {
  icon: "😀",
  name: "timewarrior_svenXY",
  type: "shell",
  description: "zsh plugin for timewarrior",
  authors: [
    {
      name: "svenXY",
      github: "svenXY",
    },
  ],
  github: "svenXY/timewarrior",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["timewarrior.plugin.zsh"],
  },
};

export default plugin;
