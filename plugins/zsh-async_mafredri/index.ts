const plugin: Fig.Plugin = {
  name: "zsh-async_mafredri",
  type: "shell",
  description: "Because your terminal should be able to perform tasks asynchronously without external tools!",
  authors: [
    {
      name: "mafredri",
      github: "mafredri",
    }
  ],
  github: "mafredri/zsh-async",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "shell",
    "zsh",
    "async",
    "asynchronous",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["async.plugin.zsh"],
  },
};

export default plugin;
