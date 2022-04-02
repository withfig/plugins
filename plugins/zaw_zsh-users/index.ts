const plugin: Fig.Plugin = {
  name: "zaw_zsh-users",
  displayName: "zaw",
  type: "shell",
  description: "zsh anything.el-like widget.",
  authors: [
    {
      name: "zsh-users",
      github: "zsh-users",
    }
  ],
  github: "zsh-users/zaw",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zaw.plugin.zsh"],
  },
};

export default plugin;
