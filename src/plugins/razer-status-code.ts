const plugin: Fig.Plugin = {
  name: "razer-status-code",
  type: "shell",
  description: "a simple ZSH plugin to change the colour of your Razer Mouse based on the status of the last executed command",
  github: "michaelmcallister/razer-status-code",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
