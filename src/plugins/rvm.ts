const plugin: Fig.Plugin = {
  name: "rvm",
  type: "shell",
  description: "Simple zsh plugin to initiate rvm.",
  github: "johnhamelink/rvm-zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
