const plugin: Fig.Plugin = {
  name: "liferay",
  type: "shell",
  description: "Oh my zsh plugins for Liferay development",
  github: "david-gutierrez-mesa/liferay-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
