const plugin: Fig.Plugin = {
  name: "uvenv",
  type: "shell",
  description: "Plugin for easy managing python's virtual envs",
  github: "vincentto13/uvenv.plugin.zsh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
