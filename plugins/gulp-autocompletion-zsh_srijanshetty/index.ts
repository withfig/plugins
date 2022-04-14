const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "gulp-autocompletion-zsh_srijanshetty",
  displayName: "Gulp Autocompletion Zsh",
  type: "shell",
  description: "Autocompletion for your gulp.js tasks in the Z-Shell (zsh).",
  authors: [
    {
      name: "srijanshetty",
      github: "srijanshetty",
      twitter: "srijanshetty",
    },
  ],
  github: "srijanshetty/gulp-autocompletion-zsh",
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["gulp-autocompletion.plugin.zsh"],
  },
};

export default plugin;
