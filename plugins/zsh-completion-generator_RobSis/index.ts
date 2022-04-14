const plugin: Fig.Plugin = {
  icon: "🦾",
  name: "zsh-completion-generator_RobSis",
  displayName: "Zsh Completion Generator",
  type: "shell",
  description:
    "Plugin that generates completion functions automatically from getopt-style help texts",
  authors: [
    {
      name: "RobSis",
      github: "RobSis",
    },
  ],
  github: "RobSis/zsh-completion-generator",
  license: ["GPL-2.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: ["zsh-completions", "zsh-plugins"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-completion-generator.plugin.zsh"],
    postScript: "compinit",
  },
  configuration: [
    {
      displayName: "Completions Folder",
      description:
        "Use a different folder than the default one for completion files",
      name: "GENCOMPL_FPATH",
      type: "environmentVariable",
      default: null,

      interface: "text",
    },
    {
      displayName: "Python Version",
      description: "Use a specific Python interpreter name",
      name: "GENCOMPL_PY",
      type: "environmentVariable",
      default: null,

      interface: "text",
    },
    {
      name: "Programs",
      description: "List of programs to generate completions for.",
      type: "script",
      default: [],

      interface: "multi-text",
      compile: (value: string[]) =>
        `zstyle :plugin:zsh-completion-generator programs ${value.join(" ")}`,
    },
  ],
};

export default plugin;
