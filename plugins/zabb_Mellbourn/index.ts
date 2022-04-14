const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "zabb_Mellbourn",
  displayName: "Zabb",
  type: "shell",
  description: "A plugin for finding z abbreviations",
  authors: [
    {
      name: "Mellbourn",
      github: "Mellbourn",
    },
  ],
  github: "Mellbourn/zabb",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "z"],
  installation: {
    origin: "github",
    sourceFiles: ["zabb.plugin.zsh"],
  },
};

export default plugin;
