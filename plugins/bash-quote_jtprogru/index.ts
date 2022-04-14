const plugin: Fig.Plugin = {
  name: "bash-quote_jtprogru",
  displayName: "Bash Quote",
  description: "Plugin for ZSH to get random quote from Bash.im",
  icon: "💬",
  type: "shell",
  authors: [
    {
      name: "jtprogru",
      github: "jtprogru",
      twitter: "jtprogru",
    },
  ],
  github: "jtprogru/bash-quote",
  license: ["WTFPL"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["bash-quote.plugin.zsh"],
  },
};

export default plugin;
