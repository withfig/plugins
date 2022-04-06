const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "npm-run.plugin.zsh_akoenig",
  displayName: "Npm Run Completions",
  type: "shell",
  description: "Autocompletion support for `npm run`.",
  authors: [
    {
      name: "akoenig",
      github: "akoenig",
    },
  ],
  github: "akoenig/npm-run.plugin.zsh",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    preScript: "autoload -Uz compinit; compinit",
    sourceFiles: ["npm-run.plugin.zsh"],
  },
};

export default plugin;
