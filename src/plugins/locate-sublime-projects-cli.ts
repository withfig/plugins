const plugin: Fig.Plugin = {
  name: "locate-sublime-projects-cli",
  type: "shell",
  description: "This small autocompletion plugin for ZSH allows to search for Sublime Text projects and opens them.",
  github: "davidwebca/locate-sublime-projects-cli",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
