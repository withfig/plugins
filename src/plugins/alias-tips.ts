const plugin: Fig.Plugin = {
  name: "alias-tips",
  type: "shell",
  description: "An oh-my-zsh plugin to help remembering those aliases you defined once",
  github: "djui/alias-tips",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
