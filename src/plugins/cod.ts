const plugin: Fig.Plugin = {
  name: "cod",
  type: "shell",
  description: "cod is a completion daemon for bash/fish/zsh",
  github: "dim-an/cod",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "zsh",
    "fish",
    "completion",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
