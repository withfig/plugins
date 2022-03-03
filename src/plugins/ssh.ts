const plugin: Fig.Plugin = {
  name: "ssh",
  type: "shell",
  description: "Zsh plugin for ssh",
  github: "zpm-zsh/ssh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
