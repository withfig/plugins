const plugin: Fig.Plugin = {
  name: "ssh",
  type: "shell",
  description: "Zsh plugin for ssh",
  github: "zpm-zsh/ssh",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
