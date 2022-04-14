const plugin: Fig.Plugin = {
  name: "alias-tips_djui",
  displayName: "Alias Tips",
  icon: "💡",
  type: "shell",
  description:
    "An oh-my-zsh plugin to help remembering those aliases you defined once",
  screenshots: ["images/1.png", "images/2.png"],
  authors: [
    {
      name: "djui",
      github: "djui",
    },
  ],
  github: "djui/alias-tips",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["alias-tips.plugin.zsh"],
  },
};

export default plugin;
