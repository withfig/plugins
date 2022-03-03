const plugin: Fig.Plugin = {
  name: "cd-reporoot",
  type: "shell",
  description: "zsh plugin to cd to git repository root directory.",
  github: "P4Cu/cd-reporoot",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
