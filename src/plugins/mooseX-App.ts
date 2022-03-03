const plugin: Fig.Plugin = {
  name: "mooseX-App",
  type: "shell",
  description: "Zsh completion generator for perl module MooseX::App",
  github: "perlpunk/MooseX-App-Plugin-ZshCompletion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
