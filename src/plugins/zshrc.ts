const plugin: Fig.Plugin = {
  name: "zshrc",
  type: "shell",
  description: "A zsh plugin to load local \".zshrc\" files from your project scopes.",
  github: "freak2geek/zshrc",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
