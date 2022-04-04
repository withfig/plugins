const plugin: Fig.Plugin = {
  name: "npm-run.plugin.zsh_akoenig",
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
    sourceFiles: ["npm-run.plugin.zsh"],
  },
};

export default plugin;
