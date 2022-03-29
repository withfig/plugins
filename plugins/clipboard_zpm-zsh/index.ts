const plugin: Fig.Plugin = {
  name: "clipboard_zpm-zsh",
  type: "shell",
  description: "Zsh clipboard plugin",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    }
  ],
  github: "zpm-zsh/clipboard",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zpm",
    "zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["clipboard.plugin.zsh"],
  },
};

export default plugin;
