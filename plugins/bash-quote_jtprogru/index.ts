const plugin: Fig.Plugin = {
  icon: "💡",
  name: "bash-quote_jtprogru",
  type: "shell",
  description: "Plugin for ZSH to get random quote from Bash.im",
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
