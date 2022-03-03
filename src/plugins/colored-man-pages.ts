const plugin: Fig.Plugin = {
  name: "colored-man-pages",
  type: "shell",
  description: "zsh plugin that colorifies man pages",
  github: "ael-code/zsh-colored-man-pages",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
