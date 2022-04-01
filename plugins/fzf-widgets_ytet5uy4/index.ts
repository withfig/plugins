const plugin: Fig.Plugin = {
  name: "fzf-widgets_ytet5uy4",
  type: "shell",
  description: "ZLE widgets of fzf",
  authors: [
    {
      name: "ytet5uy4",
      github: "ytet5uy4",
    }
  ],
  github: "ytet5uy4/fzf-widgets",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "fzf",
    "zle-widgets",
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
};

export default plugin;
