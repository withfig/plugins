const plugin: Fig.Plugin = {
  name: "forgit",
  type: "shell",
  description: "💤 A utility tool powered by fzf for using git interactively.",
  github: "wfxr/forgit",
  shells: ["zsh"],
  tags: [
    "git",
    "bash",
    "zsh",
    "cli",
    "fish",
    "fzf",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
