const plugin: Fig.Plugin = {
  name: "rvm",
  type: "shell",
  description: "Simple zsh plugin to initiate rvm.",
  github: "johnhamelink/rvm-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
