const plugin: Fig.Plugin = {
  name: "zsh-lazyload_qoomon",
  type: "shell",
  description:
    "zsh plugin for lazy load commands and speed up start up time of zsh",
  authors: [
    {
      name: "qoomon",
      github: "qoomon",
      twitter: "qoomon1",
    },
  ],
  github: "qoomon/zsh-lazyload",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["lazyload", "lazy", "load", "zsh", "speedup", "plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-lazyload.plugin.zsh"],
  },
};

export default plugin;
