const plugin: Fig.Plugin = {
  name: "laravel-sail",
  type: "shell",
  description: "a laravel-sail plugin for oh my zsh to add aliases for laravel sail commands",
  github: "ariaieboy/laravel-sail",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
