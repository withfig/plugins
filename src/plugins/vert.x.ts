const plugin: Fig.Plugin = {
  name: "vert.x",
  type: "shell",
  description: "Vert.x plugin for oh-my-zsh",
  github: "davidafsilva/vert.x-omz-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
