const plugin: Fig.Plugin = {
  name: "theia-dev-tools",
  type: "shell",
  description: "ZSH Theia IDE Dev Tools Plugin",
  github: "torin-asakura/zsh-theia-dev-tools",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
    "theia",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
