const plugin: Fig.Plugin = {
  icon: "💡",
  name: "zsh-async_mafredri",
  displayName: "Zsh Async",
  type: "shell",
  description:
    "Because your terminal should be able to perform tasks asynchronously without external tools!",
  authors: [
    {
      name: "mafredri",
      github: "mafredri",
    },
  ],
  github: "mafredri/zsh-async",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Convenience Function"],
  keywords: ["shell", "zsh", "async", "asynchronous"],
  installation: {
    origin: "github",
    sourceFiles: ["async.plugin.zsh"],
    postScript: "async_init",
  },
};

export default plugin;
