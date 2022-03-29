const plugin: Fig.Plugin = {
  name: "laravel-au-zsh-plugin_Saleh7",
  type: "shell",
  description: " Laravel 6 Artisan/PHPUnit commands aliases plugin for zsh",
  authors: [
    {
      name: "Saleh7",
      github: "Saleh7",
      twitter: "iGeek_io",
    }
  ],
  github: "Saleh7/laravel-au-zsh-plugin",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "aliases",
    "phpunit",
    "artisan",
    "laravel",
    "laravel6",
    "plugin",
    "zsh",
    "oh-my-zsh-plugin",
    "oh-my-zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["laravel-au.plugin.zsh"],
  },
};

export default plugin;
