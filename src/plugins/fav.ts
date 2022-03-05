const plugin: Fig.Plugin = {
  name: "fav",
  type: "shell",
  description: "zsh/fzf plugin that makes it really easy to add and recall named favorites of your important directories",
  github: "ddnexus/fav",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
