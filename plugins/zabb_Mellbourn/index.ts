const plugin: Fig.Plugin = {
  name: "zabb_Mellbourn",
  type: "shell",
  description: "zabb - a plugin for finding z abbreviations",
  authors: [
    {
      name: "Mellbourn",
      github: "Mellbourn",
    }
  ],
  github: "Mellbourn/zabb",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "z",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zabb.plugin.zsh"],
  },
};

export default plugin;
