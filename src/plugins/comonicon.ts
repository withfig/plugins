const plugin: Fig.Plugin = {
  name: "comonicon",
  type: "shell",
  description: "ZSH completion for Comonicon",
  github: "comonicon/ComoniconZSHCompletion.jl",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
