const plugin: Fig.Plugin = {
  name: "cd-gitroot",
  type: "shell",
  description: "zsh plugin to cd to git repository root directory.",
  github: "mollifier/cd-gitroot",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
