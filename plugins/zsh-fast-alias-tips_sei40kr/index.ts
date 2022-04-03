const plugin: Fig.Plugin = {
  name: "zsh-fast-alias-tips_sei40kr",
  type: "shell",
  description: "Help remembering the aliases you defined once",
  authors: [
    {
      name: "sei40kr",
      github: "sei40kr",
    },
  ],
  github: "sei40kr/zsh-fast-alias-tips",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["fast-alias-tips.plugin.zsh"],
  },
};

export default plugin;
