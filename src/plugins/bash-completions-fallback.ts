const plugin: Fig.Plugin = {
  name: "bash-completions-fallback",
  type: "shell",
  description: "Simple zsh plugin to support bash completions for a command if no native one is available",
  github: "3v1n0/zsh-bash-completions-fallback",
  shells: ["zsh"],
  tags: [
    "bash",
    "zsh",
    "oh-my-zsh",
    "bash-completion",
    "zsh-plugin",
    "zsh-completions",
    "oh-my-zsh-plugin",
    "bash-scripting",
    "zinit",
    "zinit-plugin",
    "bash-completions",
    "bash-zsh-migration",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
