const plugin: Fig.Plugin = {
  name: "predawn-shell_jamiewilson",
  type: "shell",
  description: "Predawn themes for iTerm, Terminal, and a ZSH prompt",
  authors: [
    {
      name: "jamiewilson",
      github: "jamiewilson",
    }
  ],
  github: "jamiewilson/predawn-shell",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["Predawn.zsh-theme"],
  },
};

export default plugin;
