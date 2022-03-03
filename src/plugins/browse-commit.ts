const plugin: Fig.Plugin = {
  name: "browse-commit",
  type: "shell",
  description: "browse-commit is an oh-my-zsh plugin that lets you open any commit in your browser from the command line.",
  github: "adolfoabegg/browse-commit",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
