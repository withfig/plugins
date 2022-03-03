const plugin: Fig.Plugin = {
  name: "jhipster",
  type: "shell",
  description: "JHipster plugin for oh-my-zsh",
  github: "jhipster/jhipster-oh-my-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
