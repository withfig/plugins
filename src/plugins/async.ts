const plugin: Fig.Plugin = {
  name: "async",
  type: "shell",
  description: "Because your terminal should be able to perform tasks asynchronously without external tools!",
  github: "mafredri/zsh-async",
  shells: ["zsh"],
  tags: [
    "shell",
    "zsh",
    "async",
    "asynchronous",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
