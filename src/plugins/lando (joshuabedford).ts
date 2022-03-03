const plugin: Fig.Plugin = {
  name: "lando (joshuabedford)",
  type: "shell",
  description: "A simple zsh plugin for lando commands.",
  github: "JoshuaBedford/lando-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
