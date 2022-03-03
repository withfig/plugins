const plugin: Fig.Plugin = {
  name: "history",
  type: "shell",
  description: "A plugin for zsh history extended by golang, dealing it like SQL",
  github: "b4b4r07/zsh-history",
  shells: ["zsh"],
  tags: [
    "go",
    "zsh",
    "golang",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
