const plugin: Fig.Plugin = {
  name: "comonicon",
  type: "shell",
  description: "ZSH completion for Comonicon",
  github: "comonicon/ComoniconZSHCompletion.jl",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
