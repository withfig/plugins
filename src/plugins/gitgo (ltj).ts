const plugin: Fig.Plugin = {
  name: "gitgo (ltj)",
  type: "shell",
  description: "A small plugin for oh-my-zsh to launch Github/Gitlab repository from the command line",
  github: "ltj/gitgo",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
