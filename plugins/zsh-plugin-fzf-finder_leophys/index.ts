const plugin: Fig.Plugin = {
  name: "zsh-plugin-fzf-finder_leophys",
  type: "shell",
  description: "An antigen plugin to have a cool search keybinding with fzf and (optionally) bat",
  authors: [
    {
      name: "leophys",
      github: "leophys",
    },
  ],
  github: "leophys/zsh-plugin-fzf-finder",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["fzf-finder.plugin.zsh"],
  },
};

export default plugin;
