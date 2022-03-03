const plugin: Fig.Plugin = {
  name: "monorepo-plugin",
  type: "shell",
  description: "Oh-my-zsh plugin for mono repository management",
  github: "zilongqiu/monorepo-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
