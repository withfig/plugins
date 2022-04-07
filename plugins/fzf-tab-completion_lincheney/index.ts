const plugin: Fig.Plugin = {
  name: "fzf-tab-completion_lincheney",
  displayName: "fzf-tab-completion",
  description: "Tab completion using fzf",
  icon: "🔎",
  screenshots: [
    "https://raw.githubusercontent.com/lincheney/fzf-tab-completion/master/example.svg",
  ],
  authors: [
    {
      name: "Lincheney",
      github: "lincheney",
    },
  ],
  github: "lincheney/fzf-tab-completion",
  license: ["GPL-3.0"],
  shells: ["zsh", "bash"],
  categories: ["Completion"],
  keywords: ["zsh", "bash", "fzf", "tab-completion", "completion"],
  type: "shell",
  installation: {
    origin: "github",
    zsh: {
      sourceFiles: ["zsh/fzf-zsh-completion.sh"],
      postScript: "bindkey '^I' fzf_completion",
    },
    bash: {
      sourceFiles: ["bash/fzf-bash-completion.sh"],
      postScript: "bind -x '\"\\t\": fzf_bash_completion'",
    },
    dependencies: ({ ctx }) => [
      {
        type: "binary",
        name: "fzf",
      },
      ...((ctx.os === "macos"
        ? [{ type: "binary", name: "gawk" }]
        : []) as Fig.Dependency[]),
    ],
  },
};

export default plugin;
