const plugin: Fig.Plugin = {
  name: "colored-man-pages-mod",
  type: "shell",
  description: "Fork from https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/colored-man-pages/colored-man-pages.plugin.zsh",
  github: "zuxfoucault/colored-man-pages_mod",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
