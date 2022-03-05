const plugin: Fig.Plugin = {
  name: "tab-title",
  type: "shell",
  description: "A ZSH plugin to set the terminal tab title according to current directory or running process. It's based (forked) from Oh-My-ZSH one.",
  github: "trystan2k/zsh-tab-title",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
    "zplugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
