const plugin: Fig.Plugin = {
  name: "editing-workbench",
  type: "shell",
  description: "fork from psprint/zsh-editing-workbench",
  github: "commiyou/zsh-editing-workbench",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
