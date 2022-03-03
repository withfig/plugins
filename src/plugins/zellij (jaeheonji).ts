const plugin: Fig.Plugin = {
  name: "zellij (jaeheonji)",
  type: "shell",
  description: "Zsh Plugin for Zellij",
  github: "jaeheonji/zsh-zellij-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zellij",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
