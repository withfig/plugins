const plugin: Fig.Plugin = {
  name: "battery_state",
  type: "shell",
  description: "A plugin for zsh to display the state of battery in right-prompt.",
  github: "jactry/zsh_battery_state",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
