const plugin: Fig.Plugin = {
  name: "n",
  type: "shell",
  description: "zsh plugin for switching node versions automatically with n",
  github: "gretzky/n.zsh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "n",
    "zsh-plugin",
    "node-version-manager",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
