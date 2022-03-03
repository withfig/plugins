const plugin: Fig.Plugin = {
  name: "hooks",
  type: "shell",
  description: "Add zsh's missing hooks, and support for user-defined hooks",
  github: "zsh-hooks/zsh-hooks",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
