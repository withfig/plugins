const plugin: Fig.Plugin = {
  name: "gitstatus",
  type: "shell",
  description: "zsh plugin for prompts which prints git status",
  github: "xylous/gitstatus",
  shells: ["zsh"],
  tags: [
    "git",
    "zsh",
    "prompt",
    "gitstats",
    "zsh-plugin",
    "git-status",
    "gitstatus",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
