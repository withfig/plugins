const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "zsh-dwim_oknowton",
  displayName: "Zsh Dwim",
  description: "ZSH Do What I Mean",
  type: "shell",
  authors: [
    {
      name: "oknowton",
      github: "oknowton",
    },
  ],
  github: "oknowton/zsh-dwim",
  site: "http://blog.patshead.com/2012/10/cleanup-of-zsh-dwim.html",
  shells: ["zsh"],
  categories: ["Productivity Hack"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
