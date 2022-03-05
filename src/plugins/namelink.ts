const plugin: Fig.Plugin = {
  name: "namelink",
  type: "shell",
  description: "zsh plugin for synchronized mapping of filesystem entries to the named directory hash",
  github: "jthat/zsh-namelink",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
