const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "noreallyjustfuckingstopalready_eventi",
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
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["flu.sh"],
    },
    zsh: {
      sourceFiles: ["noreallyjustfuckingstopalready.plugin.zsh"],
    },
  },
};

export default plugin;
