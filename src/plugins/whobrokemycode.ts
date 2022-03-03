const plugin: Fig.Plugin = {
  name: "whobrokemycode",
  type: "shell",
  description: "A ZSH plugin to highlight where a particular line was last changed in a file using git blame",
  github: "cameronbroe/whobrokemycode",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
