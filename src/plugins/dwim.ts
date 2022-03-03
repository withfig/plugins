const plugin: Fig.Plugin = {
  name: "dwim",
  type: "shell",
  description: "ZSH Do What I Mean",
  github: "oknowton/zsh-dwim",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
