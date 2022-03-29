const plugin: Fig.Plugin = {
  name: "gulp.plugin.zsh_akoenig",
  type: "shell",
  description: "Autocompletion support for your gulp.js tasks (zsh).",
  authors: [
    {
      name: "akoenig",
      github: "akoenig",
    }
  ],
  github: "akoenig/gulp.plugin.zsh",
  shells: ["zsh"],
  categories: ["Compleation"],
  installation: {
    origin: "github",
    sourceFiles: ["gulp.plugin.zsh"],
  },
};

export default plugin;
