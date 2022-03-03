const plugin: Fig.Plugin = {
  name: "dune-quotes",
  type: "shell",
  description: "Random Dune quote generator plugin for oh-my-zsh",
  github: "brokendisk/dune-quotes",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
