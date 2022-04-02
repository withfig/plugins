const plugin: Fig.Plugin = {
  name: "alias-tips_djui",
  displayName: "alias-tips",
  icon: "💡",
  type: "shell",
  description: "An oh-my-zsh plugin to help remembering those aliases you defined once",
  authors: [
    {
      name: "djui",
      github: "djui",
    }
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
