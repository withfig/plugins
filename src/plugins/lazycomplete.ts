const plugin: Fig.Plugin = {
  name: "lazycomplete",
  type: "shell",
  description: "lazy loading for shell completion scripts",
  github: "rsteube/lazycomplete",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "zsh",
    "fish",
    "powershell",
    "completion",
    "lazy",
    "oil",
    "xonsh",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
