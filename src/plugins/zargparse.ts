const plugin: Fig.Plugin = {
  name: "zargparse",
  type: "shell",
  description: "A tool for generating zsh completion files for python command line tools that use argparse",
  github: "ctil/zargparse",
  shells: ["zsh"],
  tags: [
    "python",
    "zsh",
    "oh-my-zsh",
    "autocompletion",
    "python3",
    "argparse",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
