const plugin: Fig.Plugin = {
  name: "calibre-zaw-source",
  type: "shell",
  description: "calibre source for zaw",
  github: "junkblocker/calibre-zaw-source",
  shells: ["zsh"],
  tags: [
    "plugin",
    "search",
    "zsh",
    "library",
    "books",
    "calibre",
    "zaw",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
