const plugin: Fig.Plugin = {
  name: "zimfw-extras",
  type: "shell",
  description: "Custom extras for zimfw, packaged into a zimfw plugin",
  github: "PatTheMav/zimfw-extras",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zim",
    "zimfw",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
