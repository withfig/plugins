const plugin: Fig.Plugin = {
  name: "evalcache_mroth",
  type: "shell",
  description:
    ":hatching_chick: zsh plugin to cache eval loads to improve shell startup time",
  authors: [
    {
      name: "mroth",
      github: "mroth",
      twitter: "mroth",
    },
  ],
  github: "mroth/evalcache",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["evalcache.plugin.zsh"],
  },
};

export default plugin;
