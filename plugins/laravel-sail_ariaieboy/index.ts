const plugin: Fig.Plugin = {
  icon: "👾",
  name: "laravel-sail_ariaieboy",
  type: "shell",
  description:
    "a laravel-sail plugin for oh my zsh to add aliases for laravel sail commands",
  authors: [
    {
      name: "ariaieboy",
      github: "ariaieboy",
      twitter: "smr_seddighy",
    },
  ],
  github: "ariaieboy/laravel-sail",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["laravel-sail.plugin.zsh"],
  },
};

export default plugin;
