const plugin: Fig.Plugin = {
  icon: "🌟",
  name: "gulp.plugin.zsh_akoenig",
  displayName: "Gulp Plugin Zsh",
  type: "shell",
  description: "Autocompletion support for your gulp.js tasks (zsh).",
  authors: [
    {
      name: "akoenig",
      github: "akoenig",
    },
  ],
  github: "akoenig/gulp.plugin.zsh",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["gulp.plugin.zsh"],
  },
};

export default plugin;
