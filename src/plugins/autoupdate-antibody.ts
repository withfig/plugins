const plugin: Fig.Plugin = {
  name: "autoupdate-antibody",
  type: "shell",
  description: "Add automatic updating to antigen",
  github: "spikespaz/autoupdate-antibody-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
