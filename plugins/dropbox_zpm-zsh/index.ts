const plugin: Fig.Plugin = {
  name: "dropbox_zpm-zsh",
  type: "shell",
  description: "Zsh dropbox plugin",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    }
  ],
  github: "zpm-zsh/dropbox",
  license: ["GPL-3.0"],
  site: "https://github.com/horosgrisa/zsh-dropbox",
  shells: ["zsh"],
  categories: ["Compleation"],
  keywords: [
    "zsh",
    "dropbox-plugin",
    "dropbox",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["dropbox.plugin.zsh"],
  },
};

export default plugin;
