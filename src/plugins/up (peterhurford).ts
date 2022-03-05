const plugin: Fig.Plugin = {
  name: "up (peterhurford)",
  type: "shell",
  description: "A zshell plugin for the \"up\" command, which can cd up an arbitrary number of directories",
  github: "peterhurford/up.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
