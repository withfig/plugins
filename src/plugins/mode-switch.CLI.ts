const plugin: Fig.Plugin = {
  name: "mode-switch.CLI",
  type: "shell",
  description: "a zsh-plugin for switching command line between normal mode and vi mode.",
  github: "Gyumeijie/mode-switch.CLI",
  shells: ["zsh"],
  tags: [
    "command-line",
    "switch",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
