const plugin: Fig.Plugin = {
  name: "setenv",
  type: "shell",
  description: "Oh my zsh plugin to run script on change directory",
  github: "kalpakrg/setenv",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
