const plugin: Fig.Plugin = {
  name: "noreallyjustfuckingstopalready_eventi",
  displayName: "No Really Just Stop",
  icon: "🛑",
  type: "shell",
  description:
    "Please OS X (or whatever your name is) just fucking reset your DNS cache please",
  authors: [
    {
      name: "eventi",
      github: "eventi",
    },
  ],
  github: "eventi/noreallyjustfuckingstopalready",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    zsh: {
      sourceFiles: ["noreallyjustfuckingstopalready.plugin.zsh"],
    },
  },
};

export default plugin;
