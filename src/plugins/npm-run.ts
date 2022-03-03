const plugin: Fig.Plugin = {
  name: "npm-run",
  type: "shell",
  description: "Autocompletion support for `npm run`.",
  github: "akoenig/npm-run.plugin.zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
