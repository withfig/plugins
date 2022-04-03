const plugin: Fig.Plugin = {
  name: "hitokoto_derry96",
  type: "shell",
  description: "oh my zsh plugin",
  authors: [
    {
      name: "derry96",
      github: "derry96",
    },
  ],
  github: "derry96/hitokoto",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["hitokoto.plugin.zsh"],
  },
};

export default plugin;
