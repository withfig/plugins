const plugin: Fig.Plugin = {
  name: "iterm-tab-colors",
  type: "shell",
  description: "Tabs automatically change colors depending on the folder you are in.",
  github: "tysonwolker/iterm-tab-colors",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
