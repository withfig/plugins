const plugin: Fig.Plugin = {
  name: "jumpstorm-completion",
  type: "shell",
  description: "zsh plugin for command autocompletition in jumpstorm (see https://github.com/netresearch/jumpstorm)",
  github: "netresearch/jumpstorm-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
