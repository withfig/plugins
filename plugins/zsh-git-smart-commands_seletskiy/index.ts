const plugin: Fig.Plugin = {
  name: "zsh-git-smart-commands_seletskiy",
  type: "shell",
  description: "Wrappers for git commands to be efficient in the shell",
  authors: [
    {
      name: "seletskiy",
      github: "seletskiy",
    }
  ],
  github: "seletskiy/zsh-git-smart-commands",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["plugin.zsh"],
  },
};

export default plugin;
