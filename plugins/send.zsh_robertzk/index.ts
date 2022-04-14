const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "send.zsh_robertzk",
  displayName: "Send",
  type: "shell",
  description:
    "A zsh plugin for a command to pull, git add all files, commit, and push -- all in one command",
  authors: [
    {
      name: "robertzk",
      github: "robertzk",
    },
  ],
  github: "robertzk/send.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["send.plugin.zsh"],
  },
};

export default plugin;
