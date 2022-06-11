const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zsh-artisan_jessarcher",
  displayName: "Zsh Artisan",
  type: "shell",
  description:
    "Laravel artisan plugin for zsh to help you to run artisan from anywhere in the project tree, with auto-completion, and it can automatically open files created by artisan!",
  authors: [
    {
      name: "jessarcher",
      github: "jessarcher",
      twitter: "jessarchercodes",
    },
  ],
  github: "jessarcher/zsh-artisan",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "artisan", "php", "laravel"],
  installation: {
    origin: "github",
    zsh: {
      preScript: "autoload -Uz compinit && compinit",
      sourceFiles: ["artisan.plugin.zsh"],
    },
  },
  configuration: [
    {
      displayName: "Editor for New artisan make:* Files",
      description:
        "Automatically open new files created by `artisan make:*` commands with the editor CLI defined by this variable.",
      type: "environmentVariable",
      name: "ARTISAN_OPEN_ON_MAKE_EDITOR",
      interface: "select",
      allowUserCreatedOptions: true,
      options: [null, "vim", "subl", "pstorm", "atom", "code"],
      default: null,
    },
  ],
};

export default plugin;
