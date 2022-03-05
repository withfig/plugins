const plugin: Fig.Plugin = {
  name: "kctl",
  type: "shell",
  description: "robbyrussell/oh-my-zsh kubectl.plugin.zsh without delete commands :)",
  github: "yzdann/kctl",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
