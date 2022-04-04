const plugin: Fig.Plugin = {
  name: "zsh-dwim_oknowton",
  type: "shell",
  description: "ZSH Do What I Mean",
  authors: [
    {
      name: "oknowton",
      github: "oknowton",
    },
  ],
  github: "oknowton/zsh-dwim",
  site: "http://blog.patshead.com/2012/10/cleanup-of-zsh-dwim.html",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-dwim.plugin.zsh"],
  },
};

export default plugin;
