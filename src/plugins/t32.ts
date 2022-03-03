const plugin: Fig.Plugin = {
  name: "t32",
  type: "shell",
  description: "ZSH plugin for the Lauterbach Trace32 toolset.",
  github: "chrissicool/zsh-t32",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
