const plugin: Fig.Plugin = {
  name: "loremipsum",
  type: "shell",
  description: "lorem ipsum generator z shell plugin",
  github: "pfahlr/zsh_plugin_loremipsum",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
