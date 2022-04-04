const plugin: Fig.Plugin = {
  name: "javaVersions_miguefl",
  type: "shell",
  description:
    "Change between different java versions with this oh-my-zsh plugin",
  authors: [
    {
      name: "miguefl",
      github: "miguefl",
    },
  ],
  github: "miguefl/javaVersions",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["javaVersions.plugin.zsh"],
  },
};

export default plugin;
