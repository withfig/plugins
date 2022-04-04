const plugin: Fig.Plugin = {
  name: "smart-cd_dbkaplun",
  type: "shell",
  description: "zsh plugin that runs `ls` and `git status` after chpwd",
  authors: [
    {
      name: "dbkaplun",
      github: "dbkaplun",
    },
  ],
  github: "dbkaplun/smart-cd",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["smart-cd.plugin.zsh"],
  },
};

export default plugin;
