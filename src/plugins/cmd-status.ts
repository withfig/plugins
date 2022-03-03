const plugin: Fig.Plugin = {
  name: "cmd-status",
  type: "shell",
  description: "ZSH plugin to report the status of commands including return code and time taken.",
  github: "BlaineEXE/zsh-cmd-status",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
