const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "fd-zsh_MohamedElashri",
  displayName: "fd aliases zsh plugin",
  type: "shell",
  description: "zsh plugin addind aliases for fd, a modern replacement for find.",
  authors: [
    {
      name: "MohamedElashri",
      github: "MohamedElashri",
    },
  ],
  github: "MohamedElashri/fd-zsh/zsh-aliases-exa",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Alias"],
  keywords: ["fd", "find", "zsh", "alias"],
  installation: {
    origin: "github",
    sourceFiles: ["fd-zsh.plugin.zsh"],
    dependencies: [
      {
        type: "binary",
        name: "fd",
      },
    ],
  },
};
  
export default plugin;