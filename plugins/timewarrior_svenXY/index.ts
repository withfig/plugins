const plugin: Fig.Plugin = {
  name: "timewarrior_svenXY",
  displayName: "Timewarrior Plugin",
  icon: "🕰",
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
