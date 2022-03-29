const plugin: Fig.Plugin = {
  name: "zsh-pandoc-completion_srijanshetty",
  type: "shell",
  description: "Antigen plugin for pandoc",
  authors: [
    {
      name: "srijanshetty",
      github: "srijanshetty",
      twitter: "srijanshetty",
    }
  ],
  github: "srijanshetty/zsh-pandoc-completion",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "pandoc",
    "pandoc-completion",
    "shell",
    "antigen",
    "zsh",
    "zsh-completions",
    "prezto",
    "ohmyzsh",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-pandoc-completion.plugin.zsh"],
  },
};

export default plugin;
