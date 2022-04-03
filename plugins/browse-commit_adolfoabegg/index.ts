const plugin: Fig.Plugin = {
  name: "browse-commit_adolfoabegg",
  type: "shell",
  description:
    "browse-commit is an oh-my-zsh plugin that lets you open any commit in your browser from the command line.",
  authors: [
    {
      name: "adolfoabegg",
      github: "adolfoabegg",
    },
  ],
  github: "adolfoabegg/browse-commit",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["browse-commit.plugin.zsh"],
  },
};

export default plugin;
