const plugin: Fig.Plugin = {
  name: "rc-files",
  type: "shell",
  description: "A simple zsh plugin that provides shortcuts to edit rc files",
  github: "0b10/rc-files",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
