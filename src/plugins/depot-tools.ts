const plugin: Fig.Plugin = {
  name: "depot-tools",
  type: "shell",
  description: "oh-my-zsh wrapper plugin for depot_tools",
  github: "kuoe0/zsh-depot-tools",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
