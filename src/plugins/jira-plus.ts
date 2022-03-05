const plugin: Fig.Plugin = {
  name: "jira-plus",
  type: "shell",
  description: "A plugin for oh-my-zsh that can parse the issue key out of the current branch i.e. \"issue/CONF-123\"",
  github: "gerges-zz/oh-my-zsh-jira-plus",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
