const plugin: Fig.Plugin = {
  name: "zsh-window-title_olets",
  type: "shell",
  description: "A zsh plugin for informative terminal window titles",
  authors: [
    {
      name: "olets",
      github: "olets",
      twitter: "oletsdev",
    }
  ],
  github: "olets/zsh-window-title",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "terminal",
    "command-line",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-window-title.plugin.zsh"],
  },
};

export default plugin;
