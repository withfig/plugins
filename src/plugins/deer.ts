const plugin: Fig.Plugin = {
  name: "deer",
  type: "shell",
  description: "ranger-like file navigation for zsh",
  github: "vifon/deer",
  shells: ["zsh"],
  tags: [
    "zsh",
    "ranger",
    "file-navigation",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
