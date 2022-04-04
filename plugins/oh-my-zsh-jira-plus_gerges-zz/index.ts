const plugin: Fig.Plugin = {
  name: "oh-my-zsh-jira-plus_gerges-zz",
  type: "shell",
  description:
    'A plugin for oh-my-zsh that can parse the issue key out of the current branch i.e. "issue/CONF-123"',
  authors: [
    {
      name: "gerges-zz",
      github: "gerges-zz",
    },
  ],
  github: "gerges-zz/oh-my-zsh-jira-plus",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["jira+.plugin.zsh"],
  },
};

export default plugin;
