const plugin: Fig.Plugin = {
  name: "fzf-history-search",
  type: "shell",
  description: "A simple zsh plugin that replaces Ctrl+R with an fzf-driven select which includes date/times.",
  github: "joshskidmore/zsh-fzf-history-search",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
