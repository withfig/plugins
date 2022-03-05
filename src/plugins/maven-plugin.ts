const plugin: Fig.Plugin = {
  name: "maven-plugin",
  type: "shell",
  description: "customized plugin for maven, moving to antigen from oh-my-zsh",
  github: "KyleChamberlin/zsh_maven_plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
