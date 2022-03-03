const plugin: Fig.Plugin = {
  name: "oclif completion generator",
  type: "shell",
  description: "oclif plugin for generating shell completions",
  github: "MunifTanjim/oclif-plugin-completion",
  shells: ["zsh"],
  tags: [
    "shell",
    "bash",
    "zsh",
    "fish",
    "shell-completion",
    "oclif",
    "oclif-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
