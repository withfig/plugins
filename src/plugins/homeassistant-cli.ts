const plugin: Fig.Plugin = {
  name: "homeassistant-cli",
  type: "shell",
  description: "A Oh my ZSH plugin for homeassistant CLI",
  github: "frosit/zsh-plugin-homeassistant-cli",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
