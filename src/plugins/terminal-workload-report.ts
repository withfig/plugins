const plugin: Fig.Plugin = {
  name: "terminal-workload-report",
  type: "shell",
  description: "A plugin for oh-my-zsh which calculate and display how many commands has been executed via terminal.",
  github: "LockonS/terminal-workload-report",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
