const plugin: Fig.Plugin = {
  name: "expand-ealias.plugin.zsh_zigius",
  type: "shell",
  description: "expand specific aliases with space",
  authors: [
    {
      name: "zigius",
      github: "zigius",
    }
  ],
  github: "zigius/expand-ealias.plugin.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugins",
    "expanding-aliases",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["expand-ealias.plugin.zsh"],
  },
};

export default plugin;
