const plugin: Fig.Plugin = {
  name: "deepx-zsh-plugin_GetAmbush",
  type: "shell",
  authors: [
    {
      name: "GetAmbush",
      github: "GetAmbush",
    }
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
