const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "deepx-zsh-plugin_GetAmbush",
  displayName: "DeepX Zsh Plugin",
  type: "shell",
  authors: [
    {
      name: "GetAmbush",
      github: "GetAmbush",
    },
  ],
  github: "GetAmbush/deepx-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["deepx.plugin.zsh"],
  },
};

export default plugin;
