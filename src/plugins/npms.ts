const plugin: Fig.Plugin = {
  name: "npms",
  type: "shell",
  description: "npms is a utility tool powered by fzf for using npm scripts interactively.",
  github: "torifat/npms",
  shells: ["zsh"],
  tags: [
    "zsh",
    "fzf",
    "zsh-plugin",
    "zinit-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
