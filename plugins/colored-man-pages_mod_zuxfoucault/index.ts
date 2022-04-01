const plugin: Fig.Plugin = {
  name: "colored-man-pages_mod_zuxfoucault",
  type: "shell",
  description: "Fork from https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/colored-man-pages/colored-man-pages.plugin.zsh",
  authors: [
    {
      name: "zuxfoucault",
      github: "zuxfoucault",
    }
  ],
  github: "zuxfoucault/colored-man-pages_mod",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["colored-man-pages_mod.plugin.zsh"],
  },
};

export default plugin;
