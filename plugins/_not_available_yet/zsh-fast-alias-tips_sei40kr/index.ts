const plugin: Fig.Plugin = {
  name: "zsh-fast-alias-tips_sei40kr",
  displayName: "zsh-fast-alias-tips",
  icon: "💨",
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
  categories: ["Alias", "Productivity Hack"],
  keywords: ["zsh", "zsh-plugin"],
  installation: {
    origin: "github",
    sourceFiles: ["fast-alias-tips.plugin.zsh"],
  },
};

export default plugin;
