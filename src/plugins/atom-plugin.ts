const plugin: Fig.Plugin = {
  name: "atom-plugin",
  type: "shell",
  description: "Plugin for Oh My Zsh that let's you launch a file or folder in Atom from iTerm2",
  github: "CorradoRossi/oh-my-zsh-atom-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
