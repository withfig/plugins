const plugin: Fig.Plugin = {
  name: "newman",
  type: "shell",
  description: "Oh-my-zsh autocomplete plugin for Newman",
  github: "selop/newman-autocomplete",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
