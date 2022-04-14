const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "hipchat.zsh_robertzk",
  displayName: "HipChat Zsh",
  type: "shell",
  description: "A zsh plugin to send hipchat messages through shell",
  authors: [
    {
      name: "robertzk",
      github: "robertzk",
    },
  ],
  github: "robertzk/hipchat.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["hipchat.plugin.zsh"],
  },
};

export default plugin;
