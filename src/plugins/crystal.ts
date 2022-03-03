const plugin: Fig.Plugin = {
  name: "crystal",
  type: "shell",
  description: ".oh-my-zsh plugin for Crystal",
  github: "veelenga/crystal-zsh",
  shells: ["zsh"],
  tags: [
    "crystal",
    "zsh-plugins",
    "oh-my-zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
