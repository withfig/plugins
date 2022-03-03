const plugin: Fig.Plugin = {
  name: "send",
  type: "shell",
  description: "A zsh plugin for a command to pull, git add all files, commit, and push -- all in one command",
  github: "robertzk/send.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
