const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "fz_changyuheng",
  displayName: "Fz",
  type: "shell",
  description:
    "Cli shell plugin, the missing fuzzy tab completion feature for the z jump around command.",
  authors: [
    {
      name: "changyuheng",
      github: "changyuheng",
    },
  ],
  github: "changyuheng/fz",
  license: ["MPL-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "zsh",
    "pluging",
    "zsh-plugin",
    "oh-my-zsh",
    "zplug",
    "z",
    "fuzzy-search",
    "cd",
    "fuzzy",
    "jump",
    "j",
    "fasd",
    "autojump",
    "bash",
    "completion",
    "autocompletion",
    "bash-completion",
    "zsh-completion",
    "tab-completion",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["fz.bash"],
    },
    zsh: {
      sourceFiles: ["fz.plugin.zsh"],
    },
  },
};

export default plugin;
