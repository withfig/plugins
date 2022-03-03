const plugin: Fig.Plugin = {
  name: "noreallyjustfuckingstopalready",
  type: "shell",
  description: "Please OS X (or whatever your name is) just fucking reset your DNS cache please",
  github: "eventi/noreallyjustfuckingstopalready",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
