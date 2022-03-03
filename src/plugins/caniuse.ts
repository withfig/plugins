const plugin: Fig.Plugin = {
  name: "caniuse",
  type: "shell",
  description: "This oh-my-zsh plugin brings CanIUse (http://caniuse.com) to your terminal.",
  github: "walesmd/caniuse.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
