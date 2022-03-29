const plugin: Fig.Plugin = {
  name: "history-here_leonjza",
  type: "shell",
  description: "A zsh plugin to quickly isolate shell history recording.",
  authors: [
    {
      name: "leonjza",
      github: "leonjza",
      twitter: "leonjza",
    }
  ],
  github: "leonjza/history-here",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["history-here.plugin.zsh"],
  },
};

export default plugin;
