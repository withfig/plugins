const plugin: Fig.Plugin = {
  name: "youtube-dl",
  type: "shell",
  description: "Simple Zsh plugin for youtube-dl",
  github: "joow/youtube-dl",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
