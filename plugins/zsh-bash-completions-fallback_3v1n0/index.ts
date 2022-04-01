const plugin: Fig.Plugin = {
  name: "zsh-bash-completions-fallback_3v1n0",
  type: "shell",
  description: "Simple zsh plugin to support bash completions for a command if no native one is available",
  authors: [
    {
      name: "3v1n0",
      github: "3v1n0",
    }
  ],
  github: "3v1n0/zsh-bash-completions-fallback",
  license: ["LGPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh",
    "bash",
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "zsh-plugin",
    "zsh-completions",
    "bash-completion",
    "zinit",
    "zinit-plugin",
    "bash-completions",
    "bash-zsh-migration",
    "bash-scripting",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"bash-completions-getter.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"zsh-bash-completions-fallback.plugin.zsh"
      ],
    },
  },
};

export default plugin;
